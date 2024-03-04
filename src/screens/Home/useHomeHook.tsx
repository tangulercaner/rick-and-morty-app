import {RefObject, useRef, useState} from 'react';
import {ICharacter, ICharacterList} from '../../types/networkTypes';
import {ICharacterFilter} from '../../types/componentTypes';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {getEpisode} from '../../network/network';
import {getCharacters} from '../../redux/actions/mainActions';
import {useAppDispatch} from '../../redux/useAppDispatch';
import {IReduxState} from '../../types/reduxTypes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/navigationTypes';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'HOME'>;

interface IReturnType {
  characters: ICharacterList;
  onPressCharacterItem: (character: ICharacter) => Promise<void>;
  getCharactersIsLoading: boolean;
  applyFilter: (newFilter: ICharacterFilter) => void;
  clearFilter: () => void;
  loadMoreCharacter: () => void;
  flatListRef: RefObject<FlatList<ICharacter>>;
  filter: ICharacterFilter | null;
}

const useHomeHook = (): IReturnType => {
  const navigation = useNavigation<NavigationProp>();

  const [filter, setFilter] = useState<ICharacterFilter | null>(null);
  const flatListRef = useRef<FlatList<ICharacter>>(null);

  const [page, setPage] = useState<number>(2);

  const characters = useSelector((state: IReduxState) => state.main.characters);

  const charactersInfo = useSelector(
    (state: IReduxState) => state.main.charactersInfo,
  );

  const getCharactersIsLoading = useSelector(
    (state: IReduxState) => state.main.getCharactersIsLoading,
  );

  const dispatch = useAppDispatch();

  const onPressCharacterItem = async (character: ICharacter) => {
    const {episode} = character;
    const lastEpisode = episode[episode.length - 1];

    const episodeResponse = await getEpisode(lastEpisode);

    navigation.navigate('DETAILS', {
      character,
      episode: episodeResponse,
    });
  };

  const loadMoreCharacter = () => {
    if (charactersInfo?.next) {
      dispatch(getCharacters(page, filter));
    }
    setPage(page + 1);
  };

  const applyFilter = (newFilter: ICharacterFilter) => {
    setFilter(newFilter);
    setPage(2);
    dispatch(getCharacters(1, newFilter));
    scrollToTop();
  };

  const clearFilter = () => {
    setFilter(null);
    setPage(2);
    dispatch(getCharacters(1));
    scrollToTop();
  };

  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({animated: true, offset: 0});
  };

  return {
    characters,
    onPressCharacterItem,
    getCharactersIsLoading,
    applyFilter,
    clearFilter,
    loadMoreCharacter,
    flatListRef,
    filter,
  };
};

export default useHomeHook;
