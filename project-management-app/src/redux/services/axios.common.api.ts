import axios, { AxiosRequestConfig } from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { BASE_URL, RoutersMap } from '../../utils/constants';

export const axiosFetchCommon = axios.create({
  baseURL: BASE_URL,
});

export const setupInterceptors401 = (
  navigate: NavigateFunction,
  useLogout: { (): (() => void)[]; (): void }
) => {
  axiosFetchCommon.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const { status } = error.response;

      if (status === 401) {
        useLogout();
        navigate(RoutersMap.signIn);
      }

      return Promise.reject(error);
    }
  );
};

export const setupInterceptorsToken = (token: string) => {
  axiosFetchCommon.interceptors.request.use(async (config: AxiosRequestConfig) => {
    if (token) {
      if (config.headers !== undefined) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  });
};
