import React, {useEffect} from 'react';
import {useAppDispatch} from '../redux/useAppDispatch';
import {loadFavoriteCharactersFromStorage} from '../redux/actions/mainActions';

const AsyncStorageService = (): React.JSX.Element => {
  const dispatch = useAppDispatch();

  const getFavoriteCharacters = async () => {
    dispatch(loadFavoriteCharactersFromStorage());
  };

  useEffect(() => {
    getFavoriteCharacters();
  });

  return <></>;
};

export default AsyncStorageService;
