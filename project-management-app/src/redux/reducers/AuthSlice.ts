import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthType, UserType } from '../../utils/types/types';
import { LoadingState } from '../../utils/constants';
import { deleteUser, editUser, getUserInfo } from '../services/EditUser.api';

const initialState: AuthType = {
  name: localStorage.getItem('name') || '',
  login: localStorage.getItem('login') || '',
  token: localStorage.getItem('token') || '',
  userId: localStorage.getItem('userId') || '',
  isLoading: LoadingState.Initial,
  errorMessage: '',
  isFetching: false,
};

export const authSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    setSignInData(
      state,
      {
        payload: { user, token, userId },
      }: PayloadAction<{ user: string; token: string; userId: string }>
    ) {
      state.login = user;
      state.token = token;
      state.userId = userId;
    },
    setSignUpData(
      state,
      {
        payload: { name, login, userId },
      }: PayloadAction<{ name: string; login: string; userId: string }>
    ) {
      state.name = name;
      state.login = login;
      state.userId = userId;
    },
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setUserId(state, action: PayloadAction<string>) {
      state.userId = action.payload;
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setLogin(state, action: PayloadAction<string>) {
      state.login = action.payload;
    },
    clearUserInfo(state) {
      state.token = '';
      state.name = '';
      state.login = '';
      state.userId = '';
    },
  },
  extraReducers: {
    [editUser.pending.type]: (state) => {
      state.isLoading = LoadingState.Loading;
      state.isFetching = false;
    },
    [editUser.fulfilled.type]: (state, action: PayloadAction<UserType>) => {
      state.isLoading = LoadingState.Success;
      state.name = action.payload.name;
      state.login = action.payload.login;
      state.isFetching = true;
    },
    [editUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = LoadingState.Error;
      state.errorMessage = action.payload;
      state.isFetching = false;
    },

    [deleteUser.pending.type]: (state) => {
      state.isLoading = LoadingState.Loading;
      state.isFetching = false;
    },
    [deleteUser.fulfilled.type]: (state) => {
      state.isLoading = LoadingState.Success;
      state.isFetching = true;
    },
    [deleteUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = LoadingState.Error;
      state.errorMessage = action.payload;
      state.isFetching = false;
    },

    [getUserInfo.pending.type]: (state) => {
      state.isLoading = LoadingState.Loading;
      state.isFetching = false;
    },
    [getUserInfo.fulfilled.type]: (state, action: PayloadAction<UserType>) => {
      state.isLoading = LoadingState.Success;
      state.name = action.payload.name;
      state.login = action.payload.login;
      state.isFetching = true;
    },
    [getUserInfo.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = LoadingState.Error;
      state.errorMessage = action.payload;
      state.isFetching = false;
    },
  },
});

export const authReducer = authSlice.reducer;
