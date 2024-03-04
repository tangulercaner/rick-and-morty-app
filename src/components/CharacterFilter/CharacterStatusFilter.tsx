import React from 'react';
import styled from 'styled-components/native';
import {Dropdown} from 'react-native-element-dropdown';
import {StyleSheet} from 'react-native';
import {CharacterStatus} from '../../helper/constants';
import colors from '../../core/colors';
import {t} from 'i18next';

const data = [
  {label: t('status_alive'), value: CharacterStatus.ALIVE},
  {label: t('status_dead'), value: CharacterStatus.DEAD},
  {label: t('status_unkown'), value: CharacterStatus.UNKNOWN},
];

interface IProps {
  status?: CharacterStatus;
  setStatus: (status: CharacterStatus) => void;
}

const CharacterStatusFilter = ({status, setStatus}: IProps) => {
  return (
    <StatusInputContainer>
      <StatusInputTitle>{t('filter_name_status')}</StatusInputTitle>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        itemTextStyle={styles.itemTextStyle}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        value={status}
        onChange={item => {
          setStatus(item.value);
        }}
      />
    </StatusInputContainer>
  );
};

export default CharacterStatusFilter;

const styles = StyleSheet.create({
  dropdown: {
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
    flex: 1,
  },
  placeholderStyle: {
    fontSize: 14,
    color: colors.silver,
  },
  selectedTextStyle: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 18,
    color: colors.black,
  },
  itemTextStyle: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 18,
    color: colors.black,
  },
});

const StatusInputContainer = styled.View`
  flex-direction: row;
`;

const StatusInputTitle = styled.Text`
  align-self: center;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: ${colors.black};
  flex: 0.3;
`;
