import React from 'react';
import styled from 'styled-components/native';
import useFavoriteButtonHook from './useFavoriteButtonHook';
import {iconButtonHitSlop} from '../../helper/constants';
import {ICharacter} from '../../types/networkTypes';
import {FavoriteIcon, FavoriteOutlineIcon} from '../Icons';

interface IProps {
  character: ICharacter;
}

const FavoriteButton = ({character}: IProps) => {
  const {isFavorite, toggleFavorite} = useFavoriteButtonHook(character);

  return (
    <Button onPress={toggleFavorite} hitSlop={iconButtonHitSlop}>
      {isFavorite ? <FavoriteIcon /> : <FavoriteOutlineIcon />}
    </Button>
  );
};

export default React.memo(FavoriteButton);

const Button = styled.TouchableOpacity``;
