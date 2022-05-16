import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import type { RootState } from '../store/store';

export const commonApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pma-team38.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      headers.set('Content-Type', 'application/json;charset=UTF-8');

      const token = (getState() as RootState)?.loginReducer?.token;
      if (token) {
        headers.set('authentication', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
