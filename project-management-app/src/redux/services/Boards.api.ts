import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosFetchCommon } from './axios.common.api';

export const requestBoards = createAsyncThunk('boards/requestBoards', async (_, thunkAPI) => {
  try {
    const response = await axiosFetchCommon.get(`/boards`);

    return response.data;
  } catch ({ message }) {
    return thunkAPI.rejectWithValue(message);
  }
});

export const createNewBoard = createAsyncThunk(
  'boards/createNewBoard',
  async ({ title, description }: { title: string; description: string }, thunkAPI) => {
    try {
      const response = await axiosFetchCommon.post(`/boards`, { title, description });
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
      await axiosFetchCommon.delete(`/boards/${id}`);
      return id;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateBoard = createAsyncThunk(
  'board/updateBoard',
  async (
    { boardId, title, description }: { boardId: string; title: string; description: string },
    thunkAPI
  ) => {
    const body = {
      title,
      description,
    };

    try {
      const response = await axiosFetchCommon.put(`/boards/${boardId}`, body);

      return response.data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);
