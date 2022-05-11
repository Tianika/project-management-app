import { LoginRequestType, LoginResponseType } from '../../utils/types/types';
import { commonApi } from './common.api';

const authApiTags = commonApi.enhanceEndpoints({ addTagTypes: ['Auth'] });

export const authApi = authApiTags.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<LoginResponseType, LoginRequestType>({
      query: (signinData) => ({
        url: `/signin`,
        method: 'POST',
        body: signinData,
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});
