import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginFormType } from '../../utils/types/types';

const initialState: LoginFormType = {
  login: '',
  token: null,
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
  },
});

export const loginReducer = loginFormSlice.reducer;
