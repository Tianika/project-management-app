import { RootState } from '../store/store';

export const usersSelector = (state: RootState) => {
  return state.usersReducer.user;
};

export const isLoadingSelector = (state: RootState) => {
  return state.usersReducer.isLoading;
};

export const errorMessageSelector = (state: RootState) => {
  return state.usersReducer.errorMessage;
};
