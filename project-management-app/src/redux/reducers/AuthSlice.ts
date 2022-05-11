import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AuthType = {
  userLogged: boolean;
};

const initialState: AuthType = {
  userLogged: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleUserLogged(state, action: PayloadAction<boolean>) {
      state.userLogged = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
