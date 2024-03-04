export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
  isFavorite?: boolean;
}

export type ICharacterList = ICharacter[];

export interface ICharactersInfo {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
}

export interface ICharacterResponse {
  info: ICharactersInfo;
  results: ICharacterList;
}

export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}
