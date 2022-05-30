import { RootState } from '../store/store';

export const authSelector = (state: RootState) => {
  return state.auth;
};

export const isLoadingAuthSelector = (state: RootState) => {
  return state.auth.isLoading;
};

export const isFetchingAuthSelector = (state: RootState) => {
  return state.auth.isFetching;
};

export const errorMessageAuthSelector = (state: RootState) => {
  return state.auth.errorMessage;
};
