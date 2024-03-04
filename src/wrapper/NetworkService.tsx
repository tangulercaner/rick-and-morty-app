import React, {useEffect} from 'react';
import {useAppDispatch} from '../redux/useAppDispatch';
import {getCharacters} from '../redux/actions/mainActions';

function NetworkService(): React.JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return <></>;
}

export default NetworkService;
