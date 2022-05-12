import { RootState } from '../store/store';

export const modalStateSelector = (state: RootState) => {
  return state.modal;
};
