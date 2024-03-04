import React from 'react';
import styled from 'styled-components/native';
import {InfoIcon} from '../Icons';
import {t} from 'i18next';
import colors from '../../core/colors';

const CharacterListEmpty = () => {
  return (
    <Container>
      <InfoIcon size={72} />
      <Warning>{t('list_empty_warning')}</Warning>
    </Container>
  );
};

export default CharacterListEmpty;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Warning = styled.Text`
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  text-align: center;
  color: ${colors.jaguar};
  margin-top: 8px;
`;
