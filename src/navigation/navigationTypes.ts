import {ICharacter, IEpisode} from '../types/networkTypes';

export type RootStackParamList = {
  HOME: undefined;
  DETAILS: {
    character: ICharacter;
    episode?: IEpisode;
  };
  FAVORITE_DETAILS: {
    character: ICharacter;
    episode?: IEpisode;
  };
  FAVORITES: undefined;
};
