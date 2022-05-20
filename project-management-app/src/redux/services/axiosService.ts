import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

export const setAxiosConfig = () => {
  const token = localStorage.getItem('token');

  const authFetch = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return authFetch;
};
