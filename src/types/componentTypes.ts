import {CharacterStatus} from '../helper/constants';

export interface ITableItem {
  title: string;
  value: string;
}

export type ITableContent = ITableItem[];

export interface ICharacterFilter {
  name?: string;
  status?: CharacterStatus;
}
