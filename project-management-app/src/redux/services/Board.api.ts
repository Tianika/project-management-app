import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  RequestColumnType,
  RequestTaskType,
  UpdateColumnType,
  UpdateTaskType,
} from '../../utils/types';
import { setAxiosConfig } from './axiosService';

// TODO добавить получение token и userid

const userID = '8feabb9c-5288-4110-bfc1-4f06b2abfb25';

const axiosFetch = setAxiosConfig();

export const requestBoard = createAsyncThunk(
  'board/requestBoard',
  async ({ id }: { id: string }, thunkAPI) => {
    try {
      const response = await axiosFetch.get(`/boards/${id}`);

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
      userId: userID,
    };

    try {
      const response = await axiosFetch.post(`/boards/${boardId}/columns/${columnId}/tasks`, body);

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
      await axiosFetch.delete(`/boards/${boardId}/columns/${columnId}/tasks/${taskId}`);

      return { boardId, columnId, taskId };
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const createNewColumn = createAsyncThunk(
  'board/createNewColumn',
  async ({ title, boardId, newColumnOrder }: RequestColumnType, thunkAPI) => {
    const body = {
      title,
      order: newColumnOrder,
    };

    try {
      const response = await axiosFetch.post(`/boards/${boardId}/columns`, body);

      return response.data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'board/deleteColumn',
  async ({ boardId, columnId }: { boardId: string; columnId: string }, thunkAPI) => {
    try {
      await axiosFetch.delete(`/boards/${boardId}/columns/${columnId}`);

      return { boardId, columnId };
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateColumn = createAsyncThunk(
  'board/updateColumn',
  async ({ title, boardId, columnId, order }: UpdateColumnType, thunkAPI) => {
    const body = {
      title,
      order,
    };

    try {
      const response = await axiosFetch.put(`/boards/${boardId}/columns/${columnId}`, body);

      return response.data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateTask = createAsyncThunk(
  'board/updateTask',
  async (
    { title, order, description, boardId, columnId, taskId, userId }: UpdateTaskType,
    thunkAPI
  ) => {
    const body = {
      title,
      order,
      description,
      userId,
      boardId,
      columnId,
    };

    try {
      const response = await axiosFetch.put(
        `/boards/${boardId}/columns/${columnId}/tasks/${taskId}`,
        body
      );

      return response.data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);
