import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';
import { RequestColumnType, RequestTaskType, UpdateColumnType } from '../../utils/types';

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

export const createNewColumn = createAsyncThunk(
  'board/createNewColumn',
  async ({ title, boardId, newColumnOrder }: RequestColumnType, thunkAPI) => {
    const body = {
      title,
      order: newColumnOrder,
    };

    try {
      const response = await axios.post(`${BASE_URL}/boards/${boardId}/columns`, body, config);

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
      await axios.delete(`${BASE_URL}/boards/${boardId}/columns/${columnId}`, config);

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
      const response = await axios.put(
        `${BASE_URL}/boards/${boardId}/columns/${columnId}`,
        body,
        config
      );

      return response.data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);
