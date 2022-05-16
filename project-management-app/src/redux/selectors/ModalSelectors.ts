import { RootState } from '../store/store';

export const modalStateSelector = (state: RootState) => {
  return state.modal;
};

export const modalFunctionIdSelector = (state: RootState) => {
  return state.modal.functionId;
};
