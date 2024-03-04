import {useState} from 'react';
import {ICharacter, ICharacterList} from '../../types/networkTypes';
import {ICharacterFilter} from '../../types/componentTypes';

interface IReturnType {
  toggleFilter: () => void;
  showFilter: boolean;
  keyExtractor: (item: ICharacter) => string;
  toggleGrid: () => void;
  gridMode: boolean;
  isCharacterListEmpty: boolean;
}

const useCharacterListHook = (
  characters: ICharacterList,
  clearFilter?: () => void,
  filter?: ICharacterFilter | null,
): IReturnType => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [gridMode, setGridMode] = useState<boolean>(false);

  const keyExtractor = (item: ICharacter) => item.id.toString();

  const toggleFilter = () => {
    if (showFilter && clearFilter && filter) {
      clearFilter();
    }
    setShowFilter(!showFilter);
  };

  const toggleGrid = () => {
    setGridMode(!gridMode);
  };

  const isCharacterListEmpty = characters.length === 0;

  return {
    keyExtractor,
    showFilter,
    toggleFilter,
    gridMode,
    toggleGrid,
    isCharacterListEmpty,
  };
};

export default useCharacterListHook;
