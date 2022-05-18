import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, LoadingState } from '../../utils/constants';
import {
  BoardDataType,
  BoardState,
  CreateTaskActionProps,
  RequestTaskType,
  TaskResponseType,
  UpdateTaskActionProps,
} from '../../utils/types';

// TODO добавить получение token и userid
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4ZmVhYmI5Yy01Mjg4LTQxMTAtYmZjMS00ZjA2YjJhYmZiMjUiLCJsb2dpbiI6InVzZXIwMDciLCJpYXQiOjE2NTE5MzkwNTV9.ZBZgPVIpa0-5uw8EEhrukKr0xdVZGO92wFJsXSsWDwg';

const userId = '8feabb9c-5288-4110-bfc1-4f06b2abfb25';

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

export const createNewTask = createAsyncThunk(
  'board/createNewTask',
  async ({ title, description, boardId, columnId, newTaskOrder }: RequestTaskType, thunkAPI) => {
    const body = {
      title,
      order: newTaskOrder,
      description,
      userId,
    };

    try {
      const response = await axios.post(
        `${BASE_URL}/boards/${boardId}/columns/${columnId}/tasks`,
        body,
        config
      );

      return response.data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'board/deleteTask',
  async (
    { boardId, columnId, taskId }: { boardId: string; columnId: string; taskId: string },
    thunkAPI
  ) => {
    try {
      await axios.delete(
        `${BASE_URL}/boards/${boardId}/columns/${columnId}/tasks/${taskId}`,
        config
      );

      return { boardId, columnId, taskId };
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState: BoardState = {
  boardId: '',
  columnId: '',
  taskId: '',
  boardData: { id: '', title: '', columns: [] },
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
    clearBoardData: (state) => {
      state.boardData = { id: '', title: '', columns: [] };
    },
    saveIdsForNewTask: (state, action: PayloadAction<CreateTaskActionProps>) => {
      const { boardId, columnId } = action.payload;

      if (boardId) {
        state.boardId = boardId;
        state.columnId = columnId;
      }
    },
    saveIdsForUpdateTask: (state, action: PayloadAction<UpdateTaskActionProps>) => {
      const { boardId, columnId, taskId } = action.payload;

      if (boardId) {
        state.boardId = boardId;
        state.columnId = columnId;
        state.taskId = taskId;
      }
    },
  },
  extraReducers: {
    [requestBoard.pending.type]: (state) => {
      state.isLoading = LoadingState.Loading;
    },
    [requestBoard.fulfilled.type]: (state, action: PayloadAction<BoardDataType>) => {
      state.isLoading = LoadingState.Success;
      state.boardData = action.payload;
    },
    [requestBoard.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = LoadingState.Error;
      state.errorMessage = action.payload;
    },

    [createNewTask.pending.type]: (state) => {
      state.isLoading = LoadingState.Loading;
    },
    [createNewTask.fulfilled.type]: (state, action: PayloadAction<TaskResponseType>) => {
      const { columnId } = action.payload;

      const columnIndex = state.boardData.columns.findIndex(
        (columnItem) => columnItem.id === columnId
      );

      if (columnIndex !== -1) {
        state.boardData.columns[columnIndex].tasks.push(action.payload);
      }

      state.isLoading = LoadingState.Success;
    },
    [createNewTask.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = LoadingState.Error;
      state.errorMessage = action.payload;
    },

    [deleteTask.pending.type]: (state) => {
      state.isLoading = LoadingState.Loading;
    },
    [deleteTask.fulfilled.type]: (state, action: PayloadAction<UpdateTaskActionProps>) => {
      const { columnId, taskId } = action.payload;

      const columnIndex = state.boardData.columns.findIndex(
        (columnItem) => columnItem.id === columnId
      );

      if (columnIndex > -1) {
        const taskIndex = state.boardData.columns[columnIndex].tasks.findIndex(
          (task) => task.id === taskId
        );

        if (taskIndex > -1) {
          state.boardData.columns[columnIndex].tasks.splice(taskIndex, 1);
        }
      }

      state.isLoading = LoadingState.Success;
    },
    [deleteTask.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = LoadingState.Error;
      state.errorMessage = action.payload;
    },
  },
});

export const boardReducer = boardSlice.reducer;
export const { saveBoardId, clearBoardData, saveIdsForNewTask, saveIdsForUpdateTask } =
  boardSlice.actions;
