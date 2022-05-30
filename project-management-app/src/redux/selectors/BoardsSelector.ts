import { RootState } from '../store/store';

export const boardsStateSelector = (state: RootState) => {
  return state.boards;
};

export const boardsSelector = (state: RootState) => {
  return state.boards.boards;
};

export const isLoadingSelector = (state: RootState) => {
  return state.boards.isLoading;
};

export const errorMessageSelector = (state: RootState) => {
  return state.boards.errorMessage;
};
