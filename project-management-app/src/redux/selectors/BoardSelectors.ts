import { RootState } from '../store/store';

export const boardStateSelector = (state: RootState) => {
  return state.board;
};

export const boardIdSelector = (state: RootState) => {
  return state.board.boardId;
};

export const columnIdSelector = (state: RootState) => {
  return state.board.columnId;
};

export const taskIdSelector = (state: RootState) => {
  return state.board.taskId;
};

export const errorMessageSelector = (state: RootState) => {
  return state.board.errorMessage;
};
