import {
  ICharactersInfo,
  ICharacterList,
  ICharacterResponse,
  ICharacter,
} from './networkTypes';

export interface IMainState {
  testState: string;
  favoriteCharacters: ICharacter[];
  favoriteCharactersTable: FavoriteCharactersTable;
  getCharactersIsLoading: boolean;
  loadFavoriteCharactersFromStorageCompleted: boolean;
  characters: ICharacterList;
  charactersInfo: ICharactersInfo | null;
}

export interface IReduxState {
  main: IMainState;
}

export enum ActionTypes {
  getCharactersRequest = 'GET_CHARACTERS_REQUEST',
  getCharactersSuccess = 'GET_CHARACTERS_SUCCESS',
  getCharactersFail = 'GET_CHARACTERS_FAIL',
  addFavoriteCharacter = 'ADD_FAVORITE_CHARACTER',
  removeFavoriteCharacter = 'REMOVE_FAVORITE_CHARACTER',
  loadFavoriteCharactersFromStorage = 'LOAD_FAVORITE_CHARACTERS_FROM_STORAGE',
  setLoadFavoriteCharactersFromStorageCompleted = 'SET_LOAD_FAVORITE_CHARACTERS_FROM_STORAGE_COMPLETED',
}

export interface IGetCharactersRequest {
  type: ActionTypes.getCharactersRequest;
}

export interface IGetCharactersSuccess {
  type: ActionTypes.getCharactersSuccess;
  payload: {characterResponse: ICharacterResponse; initialPage: boolean};
}

export interface IGetCharactersFail {
  type: ActionTypes.getCharactersFail;
}

export interface IAddFavoriteCharacter {
  type: ActionTypes.addFavoriteCharacter;
  payload: ICharacter;
}

export interface IRemoveFavoriteCharacter {
  type: ActionTypes.removeFavoriteCharacter;
  payload: ICharacter;
}

export interface ILoadFavoriteCharactersFromStorage {
  type: ActionTypes.loadFavoriteCharactersFromStorage;
  payload: FavoriteCharactersStorageType;
}

export interface ISetLoadFavoriteCharactersFromStorageCompleted {
  type: ActionTypes.setLoadFavoriteCharactersFromStorageCompleted;
}

export type MainActions =
  | IGetCharactersRequest
  | IGetCharactersSuccess
  | IGetCharactersFail
  | IAddFavoriteCharacter
  | IRemoveFavoriteCharacter
  | ILoadFavoriteCharactersFromStorage
  | ISetLoadFavoriteCharactersFromStorageCompleted;

export type FavoriteCharactersTable = Record<number, boolean>;

export type FavoriteCharactersStorageType = {
  favoriteCharactersTable: FavoriteCharactersTable;
  favoriteCharacters: ICharacter[];
};
