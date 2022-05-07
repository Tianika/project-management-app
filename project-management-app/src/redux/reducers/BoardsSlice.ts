import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, LoadingState } from '../../utils/constants';
import { BoardsType } from '../../utils/types';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4ZmVhYmI5Yy01Mjg4LTQxMTAtYmZjMS00ZjA2YjJhYmZiMjUiLCJsb2dpbiI6InVzZXIwMDciLCJpYXQiOjE2NTE5MzkwNTV9.ZBZgPVIpa0-5uw8EEhrukKr0xdVZGO92wFJsXSsWDwg';

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

type BoardsState = {
  boards: Array<BoardsType>;
  isLoading: LoadingState;
  errorMessage: string;
  isFetching: boolean;
};

const initialState: BoardsState = {
  boards: [],
  isLoading: LoadingState.Initial,
  errorMessage: '',
  isFetching: false,
};

export const requestBoards = createAsyncThunk('boards/requestBoards', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${BASE_URL}/boards`, config);

    return response.data;
  } catch ({ message }) {
    return thunkAPI.rejectWithValue(message);
  }
});

export const createNewBoard = createAsyncThunk(
  'boards/createNewBoard',
  async ({ title }: { title: string }, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/boards`, { title }, config);
      return response.data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async ({ id }: { id: string }, thunkAPI) => {
    try {
      const response = await axios.delete(`${BASE_URL}/boards/${id}`, config);
      return response.data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {},
  extraReducers: {
    [requestBoards.pending.type]: (state) => {
      state.isLoading = LoadingState.Loading;
      state.isFetching = false;
    },
    [requestBoards.fulfilled.type]: (state, action: PayloadAction<Array<BoardsType>>) => {
      state.isLoading = LoadingState.Success;
      state.boards = action.payload;
    },
    [requestBoards.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = LoadingState.Error;
      state.errorMessage = action.payload;
    },

    [createNewBoard.pending.type]: (state) => {
      state.isLoading = LoadingState.Loading;
      state.isFetching = false;
    },
    [createNewBoard.fulfilled.type]: (state) => {
      state.isLoading = LoadingState.Success;
      state.isFetching = true;
    },
    [createNewBoard.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = LoadingState.Error;
      state.errorMessage = action.payload;
    },

    [deleteBoard.pending.type]: (state) => {
      state.isLoading = LoadingState.Loading;
      state.isFetching = false;
    },
    [deleteBoard.fulfilled.type]: (state) => {
      state.isLoading = LoadingState.Success;
      state.isFetching = true;
    },
    [deleteBoard.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = LoadingState.Error;
      state.errorMessage = action.payload;
    },
  },
});

export const boardsReducer = boardsSlice.reducer;
