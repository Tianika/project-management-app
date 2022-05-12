import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const langToggleSlice = createSlice({
  name: 'checked',
  initialState: {
    toggleLang: localStorage.getItem('i18nextLng') !== 'ru',
  },
  reducers: {
    changeToggle(state, action: PayloadAction<boolean>) {
      state.toggleLang = action.payload;
    },
  },
});

export const { changeToggle } = langToggleSlice.actions;
export default langToggleSlice.reducer;
