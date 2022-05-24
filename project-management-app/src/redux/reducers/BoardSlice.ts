import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadingState } from '../../utils/constants';
import {
  BoardDataType,
  BoardState,
  ColumnResponseType,
  CreateTaskActionProps,
  TaskResponseType,
  TaskViewResponseType,
  UpdateTaskActionProps,
} from '../../utils/types';
import {
  createNewColumn,
  createNewTask,
  deleteColumn,
  deleteTask,
  requestBoard,
  updateColumn,
  updateColumnsArray,
  updateTask,
  viewTask,
} from '../services/Board.api';

const initialState: BoardState = {
  boardId: '',
  columnId: '',
  taskId: '',
  boardData: { id: '', title: '', columns: [] },
  taskData: {
    id: '',
    title: '',
    order: 1,
    description: '',
    userId: '',
    boardId: '',
    columnId: '',
    files: [],
  },
  isLoading: LoadingState.Initial,
  isError: false,
  errorMessage: '',
  users: [],
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

    [createNewColumn.pending.type]: (state) => {
      state.isLoading = LoadingState.Loading;
    },
    [createNewColumn.fulfilled.type]: (state, action: PayloadAction<ColumnResponseType>) => {
      const newColumn = { ...action.payload, tasks: [] };

      state.boardData.columns.push(newColumn);
      state.isLoading = LoadingState.Success;
    },
    [createNewColumn.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = LoadingState.Error;
      state.errorMessage = action.payload;
    },

    [deleteColumn.pending.type]: (state) => {
      state.isLoading = LoadingState.Loading;
    },
    [deleteColumn.fulfilled.type]: (state, action: PayloadAction<UpdateTaskActionProps>) => {
      const { columnId } = action.payload;

      const taskIndex = state.boardData.columns.findIndex((column) => column.id === columnId);

      if (taskIndex > -1) {
        state.boardData.columns.splice(taskIndex, 1);
      }

      state.isLoading = LoadingState.Success;
    },
    [deleteColumn.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = LoadingState.Error;
      state.errorMessage = action.payload;
    },

    [updateColumn.pending.type]: (state) => {
      state.isLoading = LoadingState.Loading;
    },
    [updateColumn.fulfilled.type]: (state, action: PayloadAction<ColumnResponseType>) => {
      const { id, title } = action.payload;

      const columnIndex = state.boardData.columns.findIndex((column) => column.id === id);

      state.boardData.columns[columnIndex].title = title;
      state.isLoading = LoadingState.Success;
    },
    [updateColumn.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = LoadingState.Error;
      state.errorMessage = action.payload;
    },

    [updateTask.pending.type]: (state) => {
      state.isLoading = LoadingState.Loading;
    },
    [updateTask.fulfilled.type]: (state, action: PayloadAction<TaskResponseType>) => {
      const { id, title, description, userId, columnId } = action.payload;

      const columnIndex = state.boardData.columns.findIndex((column) => column.id === columnId);

      if (columnIndex > -1) {
        const taskIndex = state.boardData.columns[columnIndex].tasks.findIndex(
          (task) => task.id === id
        );

        if (taskIndex > -1) {
          state.boardData.columns[columnIndex].tasks[taskIndex].title = title;
          state.boardData.columns[columnIndex].tasks[taskIndex].description = description;
          state.boardData.columns[columnIndex].tasks[taskIndex].userId = userId;
        }
      }

      state.isLoading = LoadingState.Success;
    },
    [updateTask.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = LoadingState.Error;
      state.errorMessage = action.payload;
    },
    [updateColumnsArray.pending.type]: (state, action) => {
      state.boardData.columns = action.meta.arg.newColumns;
      state.isLoading = LoadingState.Loading;
    },
    [updateColumnsArray.fulfilled.type]: (state, action) => {
      state.boardData.columns = action.payload;
      state.isLoading = LoadingState.Success;
    },
    [updateColumnsArray.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = LoadingState.Error;
      state.errorMessage = action.payload;
    },

    [viewTask.pending.type]: (state) => {
      state.isLoading = LoadingState.Loading;
    },
    [viewTask.fulfilled.type]: (state, action: PayloadAction<TaskViewResponseType>) => {
      const { task, users } = action.payload;

      state.taskData = task;
      state.users = users;
      state.isLoading = LoadingState.Modal;
    },
    [viewTask.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = LoadingState.Error;
      state.errorMessage = action.payload;
    },
  },
});

export const boardReducer = boardSlice.reducer;
export const { saveBoardId, clearBoardData, saveIdsForNewTask, saveIdsForUpdateTask } =
  boardSlice.actions;
