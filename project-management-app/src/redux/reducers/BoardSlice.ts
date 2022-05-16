import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, LoadingState } from '../../utils/constants';
import { ColumnType } from '../../utils/types';

type BoardType = { id: string; title: string; column: Array<ColumnType> };

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4ZmVhYmI5Yy01Mjg4LTQxMTAtYmZjMS00ZjA2YjJhYmZiMjUiLCJsb2dpbiI6InVzZXIwMDciLCJpYXQiOjE2NTE5MzkwNTV9.ZBZgPVIpa0-5uw8EEhrukKr0xdVZGO92wFJsXSsWDwg';

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const requestBoard = createAsyncThunk(
  'board/requestBoard',
  async ({ id }: { id: string }, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/boards/${id}`, config);

      return response.data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

type BoardState = {
  boardId: string;
  boardData: { id: string; title: string; column: Array<ColumnType> };
  isLoading: LoadingState;
  isError: boolean;
  errorMessage: string;
};

const initialState: BoardState = {
  boardId: '',
  boardData: { id: '', title: '', column: [] },
  isLoading: LoadingState.Initial,
  isError: false,
  errorMessage: '',
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    saveBoardId: (state, action: PayloadAction<string>) => {
      state.boardId = action.payload;
    },
  },
  extraReducers: {
    [requestBoard.pending.type]: (state) => {
      state.isLoading = LoadingState.Loading;
    },
    [requestBoard.fulfilled.type]: (state, action: PayloadAction<BoardType>) => {
      state.isLoading = LoadingState.Success;
      state.boardData = action.payload;
    },
    [requestBoard.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = LoadingState.Error;
      state.errorMessage = action.payload;
    },
  },
});

export const boardReducer = boardSlice.reducer;
export const { saveBoardId } = boardSlice.actions;
