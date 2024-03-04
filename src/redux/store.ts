import {combineReducers, configureStore} from '@reduxjs/toolkit';
import mainReducer from './reducers/mainReducer';

const reducer = combineReducers({
  main: mainReducer,
});

export const store = configureStore({
  reducer,
});
