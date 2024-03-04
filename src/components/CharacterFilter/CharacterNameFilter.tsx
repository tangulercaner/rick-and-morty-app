import React from 'react';
import styled from 'styled-components/native';
import colors from '../../core/colors';
import {t} from 'i18next';
import {ViewStyle} from 'react-native';

interface IProps {
  name: string;
  setName: (name: string) => void;
  containerStyle?: ViewStyle;
}

const CharacterNameFilter = ({name, setName, containerStyle}: IProps) => {
  return (
    <NameInputContainer style={containerStyle}>
      <NameInputTitle>{t('filter_name_title')}</NameInputTitle>
      <NameInput
        onChangeText={setName}
        value={name}
        placeholder="Enter name to filter"
        placeholderTextColor={colors.silver}
      />
    </NameInputContainer>
  );
};

export default CharacterNameFilter;

const NameInputContainer = styled.View`
  flex-direction: row;
`;

const NameInputTitle = styled.Text`
  align-self: center;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: ${colors.black};
  flex: 0.3;
`;

const NameInput = styled.TextInput`
  border-width: 1px;
  flex: 1;
  border-radius: 8px;
  padding: 8px;
  font-size: 14px;
`;
