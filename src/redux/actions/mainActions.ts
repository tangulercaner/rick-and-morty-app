import {Dispatch} from '@reduxjs/toolkit';
import {
  ActionTypes,
  ILoadFavoriteCharactersFromStorage,
  IAddFavoriteCharacter,
  MainActions,
  IRemoveFavoriteCharacter,
  ISetLoadFavoriteCharactersFromStorageCompleted,
  IGetCharactersRequest,
  IGetCharactersSuccess,
  FavoriteCharactersStorageType,
  IGetCharactersFail,
} from '../../types/reduxTypes';
import {ICharacter, ICharacterResponse} from '../../types/networkTypes';
import axiosInstance from '../../network/axiosInstance';
import {getDataFromStorage} from '../../storage/AsyncStorageHelper';
import {LocalStorageKeys} from '../../helper/constants';
import {ICharacterFilter} from '../../types/componentTypes';

export const getCharacters = (page = 1, filter?: ICharacterFilter | null) => {
  return async (dispatch: Dispatch<MainActions>): Promise<void> => {
    dispatch<IGetCharactersRequest>({
      type: ActionTypes.getCharactersRequest,
    });

    const queryParams = new URLSearchParams({page: `${page}`});
    if (filter?.name) {
      queryParams.append('name', filter.name);
    }
    if (filter?.status) {
      queryParams.append('status', filter.status);
    }

    try {
      const response = await axiosInstance.get<ICharacterResponse>(
        `/character?${queryParams.toString()}`,
      );

      dispatch<IGetCharactersSuccess>({
        type: ActionTypes.getCharactersSuccess,
        payload: {characterResponse: response.data, initialPage: page === 1},
      });
    } catch (error) {
      dispatch<IGetCharactersFail>({
        type: ActionTypes.getCharactersFail,
      });
      console.log(error);
    }
  };
};

export const addFavoriteCharacter = (character: ICharacter) => {
  return async (dispatch: Dispatch<MainActions>): Promise<void> => {
    dispatch<IAddFavoriteCharacter>({
      type: ActionTypes.addFavoriteCharacter,
      payload: character,
    });
  };
};

export const removeFavoriteCharacter = (character: ICharacter) => {
  return async (dispatch: Dispatch<MainActions>): Promise<void> => {
    dispatch<IRemoveFavoriteCharacter>({
      type: ActionTypes.removeFavoriteCharacter,
      payload: character,
    });
  };
};

export const loadFavoriteCharactersFromStorage = () => {
  return async (dispatch: Dispatch<MainActions>): Promise<void> => {
    const favoriteCharactersStorage =
      await getDataFromStorage<FavoriteCharactersStorageType>(
        LocalStorageKeys.FAVORITE_CHARACTERS,
      );

    if (favoriteCharactersStorage) {
      dispatch<ILoadFavoriteCharactersFromStorage>({
        type: ActionTypes.loadFavoriteCharactersFromStorage,
        payload: favoriteCharactersStorage,
      });
    }

    dispatch<ISetLoadFavoriteCharactersFromStorageCompleted>({
      type: ActionTypes.setLoadFavoriteCharactersFromStorageCompleted,
    });
  };
};
