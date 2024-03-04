import React from 'react';
import styled from 'styled-components/native';
import {TextStyle, ViewStyle} from 'react-native';

interface IProps {
  text: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  backgroundColor: string;
  textColor: string;
}

const Chips = ({
  backgroundColor,
  textColor,
  text,
  containerStyle,
  textStyle,
}: IProps) => {
  return (
    <TagContainer customColor={backgroundColor} style={containerStyle}>
      <TagText customColor={textColor} style={textStyle} numberOfLines={1}>
        {text}
      </TagText>
    </TagContainer>
  );
};

export default Chips;

const TagContainer = styled.View<{customColor: string}>`
  background-color: ${({customColor}) => customColor};
  align-self: flex-start;
  padding: 4px 12px 4px 12px;
  border-radius: 24px;
  width: 90px;
`;

const TagText = styled.Text<{customColor: string}>`
  font-size: 12px;
  font-weight: normal;
  line-height: 15px;
  text-align: center;
  color: ${({customColor}) => customColor};
  text-transform: capitalize;
`;
