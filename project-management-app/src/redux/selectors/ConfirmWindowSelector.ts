import { RootState } from '../store/store';

export const ConfirmWindowSelector = (state: RootState) => {
  return state.confirmReducer.boardID;
};
