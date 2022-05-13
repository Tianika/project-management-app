import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type BoardState = {
  boardId: string;
};

const initialState: BoardState = {
  boardId: '',
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    saveBoardId: (state, action: PayloadAction<string>) => {
      state.boardId = action.payload;
    },
  },
});

export const boardReducer = boardSlice.reducer;
export const { saveBoardId } = boardSlice.actions;
