import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {
  removeFavoriteCharacter,
  addFavoriteCharacter,
} from '../../redux/actions/mainActions';
import {useAppDispatch} from '../../redux/useAppDispatch';
import {ICharacter} from '../../types/networkTypes';
import {IReduxState} from '../../types/reduxTypes';

interface IReturnType {
  toggleFavorite: () => void;
  isFavorite: boolean;
}

const useFavoriteButtonHook = (character: ICharacter): IReturnType => {
  const dispatch = useAppDispatch();

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const loadFavoriteCharactersFromStorageCompleted = useSelector(
    (state: IReduxState) =>
      state.main.loadFavoriteCharactersFromStorageCompleted,
  );

  const favoriteCharactersTable = useSelector(
    (state: IReduxState) => state.main.favoriteCharactersTable,
  );

  useEffect(() => {
    if (
      loadFavoriteCharactersFromStorageCompleted &&
      favoriteCharactersTable[character.id]
    ) {
      setIsFavorite(true);
    }
  }, [
    character.id,
    favoriteCharactersTable,
    loadFavoriteCharactersFromStorageCompleted,
  ]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);

    if (isFavorite) {
      dispatch(removeFavoriteCharacter(character));
    } else {
      dispatch(addFavoriteCharacter(character));
    }
  };

  return {isFavorite, toggleFavorite};
};

export default useFavoriteButtonHook;
