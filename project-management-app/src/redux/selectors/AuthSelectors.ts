import { RootState } from '../store/store';

export const LoginSelector = (state: RootState) => {
  return state.loginReducer;
};
