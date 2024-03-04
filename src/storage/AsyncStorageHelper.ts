import AsyncStorage from '@react-native-async-storage/async-storage';
import {LocalStorageKeys} from '../helper/constants';

export const saveDataToStorage = async <T>(
  key: LocalStorageKeys,
  value: T,
): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Error storing the data', e);
  }
};

export const getDataFromStorage = async <T>(
  key: LocalStorageKeys,
): Promise<T | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    if (jsonValue !== null) {
      return JSON.parse(jsonValue) as T;
    }

    return null;
  } catch (e) {
    console.error('Error reading the data', e);
    return null;
  }
};
