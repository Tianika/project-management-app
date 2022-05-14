import { RootState } from '../store/store';

export const loginSelector = (state: RootState) => {
  return state.loginReducer;
};
