import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const confirmWindowSlice = createSlice({
  name: 'checked',
  initialState: {
    boardID: '',
  },
  reducers: {
    setID(state, action: PayloadAction<string>) {
      state.boardID = action.payload;
    },
  },
});

export const { setID } = confirmWindowSlice.actions;
export default confirmWindowSlice.reducer;
