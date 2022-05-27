import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ALL_USERS, LoadingState } from '../../utils/constants';
import {
  BoardDataResponse,
  BoardState,
  ColumnResponseType,
  ColumnType,
  CreateTaskActionProps,
  SearchSelectorsType,
  TaskResponseType,
  TaskType,
  TaskViewResponseType,
  UpdateTaskActionProps,
} from '../../utils/types';
import {
  createNewColumn,
  createNewTask,
  deleteColumn,
  deleteTask,
  requestBoard,
  requestFilterBoard,
  updateColumn,
  updateColumnsArray,
  updateTask,
  updateTasksArray,
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
    updateTasksInColumn: (
      state,
      action: PayloadAction<{ columnId: string; tasks: TaskType[] }>
    ) => {
      const { columnId, tasks } = action.payload;

      const columnIndex = state.boardData.columns.findIndex((column) => column.id === columnId);

      state.boardData.columns[columnIndex].tasks = tasks;
    },
    updateColumns: (state, action: PayloadAction<ColumnType[]>) => {
      state.boardData.columns = action.payload;
    },
  },
  extraReducers: {
    [requestBoard.pending.type]: (state) => {
      state.isLoading = LoadingState.Loading;
    },
    [requestBoard.fulfilled.type]: (state, action: PayloadAction<BoardDataResponse>) => {
      const { boardData, users } = action.payload;

      boardData.columns.sort((prev, next) => prev.order - next.order);
      boardData.columns.forEach((column) => {
        column.tasks.sort((prev, next) => prev.order - next.order);
      });

      state.boardData = boardData;
      state.users = users;
      state.isLoading = LoadingState.Success;
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
    [updateColumnsArray.fulfilled.type]: (state) => {
      state.isLoading = LoadingState.Success;
    },
    [updateColumnsArray.rejected.type]: (
      state,
      {
        payload: { message, fallBackColumns },
      }: PayloadAction<{ message: string; fallBackColumns: Array<ColumnType> }>
    ) => {
      state.isLoading = LoadingState.Error;
      state.boardData.columns = fallBackColumns;
      state.errorMessage = message;
    },
    [updateTasksArray.pending.type]: (state, action) => {
      const { columnId } = action.payload;
      const columnIndex = state.boardData.columns.findIndex(
        (columnItem) => columnItem.id === columnId
      );

      state.boardData.columns[columnIndex].tasks = action.meta.arg.newTasks;
      state.isLoading = LoadingState.Loading;
    },
    [updateTasksArray.fulfilled.type]: (state) => {
      state.isLoading = LoadingState.Success;
    },
    [updateTasksArray.rejected.type]: (
      state,
      {
        payload: { message, fallBackTasks, columnId },
      }: PayloadAction<{ message: string; fallBackTasks: Array<TaskType>; columnId: string }>
    ) => {
      const columnIndex = state.boardData.columns.findIndex(
        (columnItem) => columnItem.id === columnId
      );
      state.isLoading = LoadingState.Error;
      state.boardData.columns[columnIndex].tasks = fallBackTasks;
      state.errorMessage = message;
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

    [requestFilterBoard.pending.type]: (state) => {
      state.isLoading = LoadingState.Loading;
    },
    [requestFilterBoard.fulfilled.type]: (
      state,
      action: PayloadAction<BoardDataResponse & { searchSelectors: SearchSelectorsType }>
    ) => {
      const {
        boardData,
        users,
        searchSelectors: { searchValue, user },
      } = action.payload;

      const filterColumns = boardData.columns.map((column) => {
        if (user !== ALL_USERS) {
          const filterTasks = column.tasks.filter((task) => task.userId === user);
          column.tasks = filterTasks;
        }

        if (searchValue) {
          const filterTasks = column.tasks.filter(
            (task) =>
              task.title.toLowerCase().includes(searchValue.toLowerCase()) ||
              task.description.toLowerCase().includes(searchValue.toLowerCase())
          );
          column.tasks = filterTasks;
        }

        return column;
      });

      boardData.columns = [...filterColumns].filter((column) => column.tasks.length);

      boardData.columns.sort((prev, next) => prev.order - next.order);
      boardData.columns.forEach((column) => {
        column.tasks.sort((prev, next) => prev.order - next.order);
      });

      state.boardData = boardData;
      state.users = users;
      state.isLoading = LoadingState.Success;
    },
    [requestFilterBoard.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = LoadingState.Error;
      state.errorMessage = action.payload;
    },
  },
});

export const boardReducer = boardSlice.reducer;
export const {
  saveBoardId,
  clearBoardData,
  saveIdsForNewTask,
  saveIdsForUpdateTask,
  updateTasksInColumn,
  updateColumns,
} = boardSlice.actions;
