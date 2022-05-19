import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadingState } from '../../utils/constants';
import { BoardsType } from '../../utils/types';
import { createNewBoard, deleteBoard, requestBoards } from '../services/Boards.api';

type BoardsState = {
  boards: Array<BoardsType>;
  isLoading: LoadingState;
  errorMessage: string;
};

const initialState: BoardsState = {
  boards: [],
  isLoading: LoadingState.Initial,
  errorMessage: '',
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {},
  extraReducers: {
    [requestBoards.pending.type]: (state) => {
      state.isLoading = LoadingState.Loading;
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
    },
    [createNewBoard.fulfilled.type]: (state, action: PayloadAction<BoardsType>) => {
      state.boards.push(action.payload);
      state.isLoading = LoadingState.Success;
    },
    [createNewBoard.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = LoadingState.Error;
      state.errorMessage = action.payload;
    },

    [deleteBoard.pending.type]: (state) => {
      state.isLoading = LoadingState.Loading;
    },
    [deleteBoard.fulfilled.type]: (state, action: PayloadAction<string>) => {
      state.boards = state.boards.filter((board) => board.id !== action.payload);
      state.isLoading = LoadingState.Success;
    },
    [deleteBoard.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = LoadingState.Error;
      state.errorMessage = action.payload;
    },
  },
});

export const boardsReducer = boardsSlice.reducer;
