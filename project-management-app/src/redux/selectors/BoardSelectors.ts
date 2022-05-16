import { RootState } from '../store/store';

export const boardIdSelector = (state: RootState) => {
  return state.board.boardId;
};
