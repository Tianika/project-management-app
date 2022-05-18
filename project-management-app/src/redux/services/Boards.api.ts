import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4ZmVhYmI5Yy01Mjg4LTQxMTAtYmZjMS00ZjA2YjJhYmZiMjUiLCJsb2dpbiI6InVzZXIwMDciLCJpYXQiOjE2NTE5MzkwNTV9.ZBZgPVIpa0-5uw8EEhrukKr0xdVZGO92wFJsXSsWDwg';

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
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
      await axios.delete(`${BASE_URL}/boards/${id}`, config);
      return id;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);
