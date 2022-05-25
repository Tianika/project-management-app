export const BASE_URL = 'https://p-m-a-team38.herokuapp.com';

export const RoutersMap = {
  welcome: '',
  main: '/main',
  board: '/board',
  signIn: '/signin',
  signUp: '/signup',
  edit: '/edit',
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
  Modal = 'Modal',
}

export enum ModalIds {
  empty = '',
  newBoard = 'newBoard',
  error = 'error',
  loading = 'loading',
  confirmationWindow = 'confirmationWindow',
  newTask = 'newTask',
  newColumn = 'newColumn',
  taskView = 'taskView',
}

export enum FunctionIds {
  empty = '',
  forBoard = 'forBoard',
  forColumn = 'forColumn',
  forTask = 'forTask',
  forDeleteProfile = 'forDeleteProfile',
}

export const LOCAL_STORAGE_KEYS = {
  i18nextLng: 'i18nextLng',
};

export const ALL_USERS = 'All';
