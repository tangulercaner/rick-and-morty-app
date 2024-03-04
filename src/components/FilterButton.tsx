import React from 'react';
import {FilterIcon} from './Icons';
import styled from 'styled-components/native';
import {iconButtonHitSlop} from '../helper/constants';
import {ViewStyle} from 'react-native';

interface IProps {
  onPress: () => void;
  containerStyle?: ViewStyle;
}

const FilterButton = ({onPress, containerStyle}: IProps) => {
  return (
    <Button
      onPress={onPress}
      hitSlop={iconButtonHitSlop}
      style={containerStyle}>
      <FilterIcon />
    </Button>
  );
};

export default FilterButton;

const Button = styled.TouchableOpacity``;
