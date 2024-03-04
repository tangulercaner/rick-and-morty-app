import React from 'react';
import {BackIcon} from './Icons';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {iconButtonHitSlop} from '../helper/constants';

const BackButton = () => {
  const navigation = useNavigation();

  const onPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <Button onPress={onPress} hitSlop={iconButtonHitSlop}>
      <BackIcon />
    </Button>
  );
};

export default BackButton;

const Button = styled.TouchableOpacity``;
