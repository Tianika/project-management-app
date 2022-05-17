import { RegisterRequestType, RegisterResponseType } from '../../utils/types/types';
import { commonApi } from './common.api';

const registerApiTags = commonApi.enhanceEndpoints({ addTagTypes: ['Register'] });

export const registerApi = registerApiTags.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<RegisterResponseType, RegisterRequestType>({
      query: (signupData) => ({
        url: `/signup`,
        method: 'POST',
        body: signupData,
      }),
      invalidatesTags: ['Register'],
    }),
  }),
});
