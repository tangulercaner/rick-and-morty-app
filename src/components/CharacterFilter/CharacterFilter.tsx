import React, {useState} from 'react';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {CharacterStatus} from '../../helper/constants';
import {ICharacterFilter} from '../../types/componentTypes';
import CustomButton from '../CustomButton';
import CharacterNameFilter from './CharacterNameFilter';
import CharacterStatusFilter from './CharacterStatusFilter';

interface IProps {
  applyFilter: (filter: ICharacterFilter) => void;
  clearFilter: () => void;
}

const CharacterFilter = ({applyFilter, clearFilter}: IProps) => {
  const [name, setName] = useState<string>('');
  const [status, setStatus] = useState<CharacterStatus>();

  const onConfirm = () => {
    if (name || status) {
      applyFilter({name, status});
    }
  };

  const onClear = () => {
    setName('');
    setStatus(undefined);
    if (name || status) {
      clearFilter();
    }
  };

  const actionButtonDisabled = !name && !status;

  return (
    <Container>
      <CharacterNameFilter
        name={name}
        setName={setName}
        containerStyle={styles.nameFilterContainerStyle}
      />
      <CharacterStatusFilter status={status} setStatus={setStatus} />

      <ButtonContainer>
        <CustomButton
          title="Clear"
          disabled={actionButtonDisabled}
          onPress={onClear}
          containerStyle={styles.confirmButton}
        />

        <CustomButton
          title="Confirm"
          disabled={actionButtonDisabled}
          onPress={onConfirm}
          containerStyle={styles.confirmButton}
        />
      </ButtonContainer>
    </Container>
  );
};

export default CharacterFilter;

const styles = StyleSheet.create({
  confirmButton: {
    marginLeft: 16,
  },
  nameFilterContainerStyle: {
    marginBottom: 8,
  },
});

const Container = styled.View`
  margin-bottom: 16px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  align-self: flex-end;
`;
