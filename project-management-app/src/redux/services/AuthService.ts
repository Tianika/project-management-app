import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  tagTypes: ['Auth'],
  endpoints: (build) => ({
    signIn: build.mutation<string[], string[]>({
      query: (post) => ({
        url: `/signin`,
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});
