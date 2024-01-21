import axios from 'axios';
import { BASE_URL, HEADER } from '@constant/index';

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: HEADER,
});

export default axiosClient;
