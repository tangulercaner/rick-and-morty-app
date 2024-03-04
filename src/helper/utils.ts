import {store} from '../redux/store';
import {IReduxState} from '../types/reduxTypes';

export const isCharacterFavorite = (id: number) => {
  const state: IReduxState = store.getState();

  const {favoriteCharactersTable} = state.main;

  if (!favoriteCharactersTable) {
    return;
  }

  return !!favoriteCharactersTable[id];
};
