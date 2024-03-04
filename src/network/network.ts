import {IEpisode} from '../types/networkTypes';
import axiosInstance from './axiosInstance';
import {BASE_URL} from '../helper/constants';

export const getEpisode = async (
  episodeLink: string,
): Promise<IEpisode | undefined> => {
  try {
    if (!episodeLink.startsWith(BASE_URL)) {
      throw new Error('Outside domain');
    }

    const response = await axiosInstance.get<IEpisode>(episodeLink, {
      baseURL: '',
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
