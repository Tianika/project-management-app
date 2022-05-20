import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginFormType } from '../../utils/types/types';

const initialState: LoginFormType = {
  login: '',
  token: localStorage.getItem('token') || '',
  userId: '',
};

export const loginFormSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    addFormData(state, action: PayloadAction<string>) {
      state.login = action.payload;
    },
    setCredentials(
      state,
      { payload: { user, token } }: PayloadAction<{ user: string; token: string }>
    ) {
      state.login = user;
      state.token = token;
    },
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setUserId(state, action: PayloadAction<string>) {
      state.userId = action.payload;
    },
  },
});

export const loginReducer = loginFormSlice.reducer;
