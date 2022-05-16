import { RootState } from '../store/store';

export const loginSelector = (state: RootState) => {
  return state.loginReducer;
};

export const userLoggedSelector = (state: RootState) => {
  return state.authReducer.userLogged;
};
