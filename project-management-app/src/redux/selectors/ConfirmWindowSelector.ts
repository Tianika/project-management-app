import { RootState } from '../store/store';

export const confirmWindowSelector = (state: RootState) => {
  return state.confirmReducer.boardID;
};
