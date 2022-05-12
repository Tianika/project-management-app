import { RootState } from '../store/store';

export const BoardsStateSelector = (state: RootState) => {
  return state.boards;
};

export const BoardsSelector = (state: RootState) => {
  return state.boards.boards;
};

export const IsLoadingSelector = (state: RootState) => {
  return state.boards.isLoading;
};

export const ErrorMessageSelector = (state: RootState) => {
  return state.boards.errorMessage;
};
