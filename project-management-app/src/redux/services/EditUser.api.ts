import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../utils/constants';
import { axiosFetchCommon } from './axios.common.api';

export const editUser = createAsyncThunk(
  'users/editUserProfile',
  async (
    {
      userId,
      name,
      login,
      password,
    }: { userId: string; name: string; login: string; password: string },
    thunkAPI
  ) => {
    try {
      const response = await axiosFetchCommon.put(`${BASE_URL}/users/${userId}`, {
        name,
        login,
        password,
      });
      return response.data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async ({ userId }: { userId: string }, thunkAPI) => {
    try {
      const response = await axiosFetchCommon.delete(`${BASE_URL}/users/${userId}`);
      return response.data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getUserInfo = createAsyncThunk(
  'users/getUserInfo',
  async ({ userId }: { userId: string }, thunkAPI) => {
    try {
      const response = await axiosFetchCommon.get(`${BASE_URL}/users/${userId}`);
      return response.data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);
