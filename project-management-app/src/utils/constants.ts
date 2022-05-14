export const BASE_URL = 'https://pma-team38.herokuapp.com';

export const RoutersMap = {
  welcome: '',
  main: '/main',
  board: '/board',
  login: '/login',
  register: '/register',
  notFound: '*',
};

export enum ModalTypes {
  Window = 'window',
  Overlay = 'overlay',
}

export enum LoadingState {
  Initial = 'Initial',
  Loading = 'loading',
  Success = 'success',
  Error = 'Error',
}

export enum ModalIds {
  empty = '',
  newBoard = 'newBoard',
  error = 'error',
  loading = 'loading',
  confirmationWindow = 'confirmationWindow',
}
