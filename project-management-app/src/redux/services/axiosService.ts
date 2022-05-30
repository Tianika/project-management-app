import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

export const setAxiosConfig = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return axios.create({
    baseURL: BASE_URL,
  });
};
