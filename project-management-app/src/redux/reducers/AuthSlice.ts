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
    addFormData(state, action: PayloadAction<boolean>) {
      state.userLogged = action.payload;
    },
  },
});

export default authSlice.reducer;
