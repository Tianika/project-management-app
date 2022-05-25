import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  IdsForRequest,
  RequestColumnType,
  RequestTaskType,
  SearchSelectorsType,
  UpdateColumnsArrayType,
  UpdateColumnType,
  UpdateTaskType,
} from '../../utils/types';
import { axiosFetchCommon } from './axios.common.api';

export const requestBoard = createAsyncThunk(
  'board/requestBoard',
  async ({ id }: { id: string }, thunkAPI) => {
    try {
      const urls = [`/boards/${id}`, `/users`];

      const promiseArray = urls.map((url) => {
        return axiosFetchCommon.get(url);
      });

      const response = await axios.all(promiseArray);

      return { boardData: response[0].data, users: response[1].data };
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const createNewTask = createAsyncThunk(
  'board/createNewTask',
  async ({ title, description, boardId, columnId, userId }: RequestTaskType, thunkAPI) => {
    const body = {
      title,
      description,
      userId,
    };

    try {
      const response = await axiosFetchCommon.post(
        `/boards/${boardId}/columns/${columnId}/tasks`,
        body
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
      await axiosFetchCommon.delete(`/boards/${boardId}/columns/${columnId}/tasks/${taskId}`);

      return { boardId, columnId, taskId };
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const createNewColumn = createAsyncThunk(
  'board/createNewColumn',
  async ({ title, boardId }: RequestColumnType, thunkAPI) => {
    const body = {
      title,
    };

    try {
      const response = await axiosFetchCommon.post(`/boards/${boardId}/columns`, body);

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
      await axiosFetchCommon.delete(`/boards/${boardId}/columns/${columnId}`);

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
      const response = await axiosFetchCommon.put(`/boards/${boardId}/columns/${columnId}`, body);

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
      const response = await axiosFetchCommon.put(
        `/boards/${boardId}/columns/${columnId}/tasks/${taskId}`,
        body
      );

      return response.data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateColumnsArray = createAsyncThunk(
  'board/updateColumnsArray',
  async ({ boardId, newColumns }: UpdateColumnsArrayType, thunkAPI) => {
    const promiseArray = newColumns.map((column, index) => {
      return axiosFetchCommon.put(`/boards/${boardId}/columns/${column.id}`, {
        title: column.title,
        order: index + 1,
      });
    });

    try {
      await axios.all(promiseArray);
      return newColumns;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const viewTask = createAsyncThunk(
  'board/viewTask',
  async ({ boardId, columnId, taskId }: IdsForRequest, thunkAPI) => {
    try {
      const urls = [`/boards/${boardId}/columns/${columnId}/tasks/${taskId}`, `/users`];

      const promiseArray = urls.map((url) => {
        return axiosFetchCommon.get(url);
      });

      const response = await axios.all(promiseArray);

      return { task: response[0].data, users: response[1].data };
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const requestFilterBoard = createAsyncThunk(
  'board/requestFilterBoard',
  async (
    { boardId, searchSelectors }: { boardId: string; searchSelectors: SearchSelectorsType },
    thunkAPI
  ) => {
    try {
      const urls = [`/boards/${boardId}`, `/users`];

      const promiseArray = urls.map((url) => {
        return axiosFetchCommon.get(url);
      });

      const response = await axios.all(promiseArray);

      return { boardData: response[0].data, users: response[1].data, searchSelectors };
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);
