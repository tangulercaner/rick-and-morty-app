import React from 'react';
import {GridIcon} from './Icons';
import styled from 'styled-components/native';
import {iconButtonHitSlop} from '../helper/constants';

interface IProps {
  onPress: () => void;
}

const GridModeButton = ({onPress}: IProps) => {
  return (
    <Button onPress={onPress} hitSlop={iconButtonHitSlop}>
      <GridIcon />
    </Button>
  );
};

export default GridModeButton;

const Button = styled.TouchableOpacity``;
