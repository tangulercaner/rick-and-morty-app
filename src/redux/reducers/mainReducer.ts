import {LocalStorageKeys} from '../../helper/constants';
import {saveDataToStorage} from '../../storage/AsyncStorageHelper';
import {
  ActionTypes,
  MainActions,
  IMainState,
  FavoriteCharactersStorageType,
} from '../../types/reduxTypes';

const INITIAL_STATE: IMainState = {
  testState: '',
  favoriteCharactersTable: {},
  favoriteCharacters: [],
  getCharactersIsLoading: false,
  loadFavoriteCharactersFromStorageCompleted: false,
  characters: [],
  charactersInfo: null,
};

const mainReducer = (state = INITIAL_STATE, action: MainActions) => {
  switch (action.type) {
    case ActionTypes.getCharactersRequest:
      return {
        ...state,
        getCharactersIsLoading: true,
      };

    case ActionTypes.getCharactersSuccess: {
      const {characterResponse, initialPage} = action.payload;

      const updatedCharacters = initialPage
        ? [...characterResponse.results]
        : [...state.characters, ...characterResponse.results];

      return {
        ...state,
        getCharactersIsLoading: false,
        characters: updatedCharacters,
        charactersInfo: characterResponse.info,
      };
    }

    case ActionTypes.getCharactersFail:
      return {
        ...state,
        getCharactersIsLoading: false,
        characters: [],
        charactersInfo: null,
      };

    case ActionTypes.addFavoriteCharacter: {
      const {id} = action.payload;

      const updatedFavoriteCharactersTable = {...state.favoriteCharactersTable};
      updatedFavoriteCharactersTable[id] = true;

      const updatedFavoriteCharacters = [
        action.payload,
        ...state.favoriteCharacters,
      ];

      const favoriteCharactersStorage = {
        favoriteCharactersTable: updatedFavoriteCharactersTable,
        favoriteCharacters: updatedFavoriteCharacters,
      };

      saveDataToStorage<FavoriteCharactersStorageType>(
        LocalStorageKeys.FAVORITE_CHARACTERS,
        favoriteCharactersStorage,
      );

      return {
        ...state,
        ...favoriteCharactersStorage,
      };
    }

    case ActionTypes.removeFavoriteCharacter: {
      const {id} = action.payload;

      const updatedFavoriteCharactersTable = {...state.favoriteCharactersTable};
      updatedFavoriteCharactersTable[id] = false;

      const updatedFavoriteCharacters = state.favoriteCharacters.filter(
        character => character.id !== action.payload.id,
      );

      const favoriteCharactersStorage = {
        favoriteCharactersTable: updatedFavoriteCharactersTable,
        favoriteCharacters: updatedFavoriteCharacters,
      };

      saveDataToStorage<FavoriteCharactersStorageType>(
        LocalStorageKeys.FAVORITE_CHARACTERS,
        favoriteCharactersStorage,
      );

      return {
        ...state,
        ...favoriteCharactersStorage,
      };
    }

    case ActionTypes.loadFavoriteCharactersFromStorage: {
      const {favoriteCharactersTable, favoriteCharacters} = action.payload;

      return {
        ...state,
        favoriteCharactersTable,
        favoriteCharacters,
      };
    }

    case ActionTypes.setLoadFavoriteCharactersFromStorageCompleted: {
      return {
        ...state,
        loadFavoriteCharactersFromStorageCompleted: true,
      };
    }

    default:
      return state;
  }
};

export default mainReducer;
