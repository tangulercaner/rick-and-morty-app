import axios from 'axios';
import {BASE_URL} from '../helper/constants';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'},
});

export default axiosInstance;
