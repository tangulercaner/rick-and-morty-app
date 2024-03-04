import React from 'react';
import {ActivityIndicator} from 'react-native';
import colors from '../core/colors';

interface IProps {
  isLoading: boolean;
  size?: 'small' | 'large';
}

const LoadingSpinner = ({isLoading, size = 'small'}: IProps) => {
  return isLoading ? (
    <ActivityIndicator size={size} color={colors.black} />
  ) : null;
};

export default LoadingSpinner;
