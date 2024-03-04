import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet, ViewStyle} from 'react-native';
import colors from '../core/colors';

interface IProps {
  onPress: () => void;
  disabled?: boolean;
  title: string;
  containerStyle?: ViewStyle;
}

const CustomButton = ({onPress, disabled, title, containerStyle}: IProps) => {
  return (
    <ConfirmButton
      onPress={onPress}
      disabled={disabled}
      style={{...containerStyle, ...(disabled ? styles.disabledButton : {})}}>
      <ConfirmText>{title}</ConfirmText>
    </ConfirmButton>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  disabledButton: {
    backgroundColor: colors.dustyGray,
  },
});

const ConfirmButton = styled.TouchableOpacity`
  background-color: ${colors.portage};
  padding: 4px 8px 4px 8px;
  border-radius: 12px;
  margin-top: 12px;
`;

const ConfirmText = styled.Text`
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  color: ${colors.wildSand};
  text-align: center;
`;
