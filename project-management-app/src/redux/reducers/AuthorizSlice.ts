import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { BASE_URL, LoadingState } from '../../utils/constants';
import { UserType } from '../../utils/types/types';

/* const tokenLocal = localStorage.getItem('token'); */
const tokenLocal =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhY2UzMzljNy1hNGNkLTQ4OTMtOTAwZC1lMTk5NWQ5NzQzNjUiLCJsb2dpbiI6InVzZXIwMDQiLCJpYXQiOjE2NTI3OTE2NzB9.Vb8kntlWoHnqnZl9CZznc9JwrXVdao137AcI2OW7yyU';

export const decoded = jwtDecode<JwtPayload>(tokenLocal);

const config = {
  headers: {
    Authorization: `Bearer ${tokenLocal}`,
  },
};

type UsersState = {
  user: UserType;
  users: Array<UserType>;
  isLoading: LoadingState;
  errorMessage: string;
  isFetching: boolean;
};

const initialState: UsersState = {
  user: {
    id: '',
    name: '',
    login: '',
    password: '',
  },
  users: [],
  isLoading: LoadingState.Initial,
  errorMessage: '',
  isFetching: false,
};

export const editUserProfile = createAsyncThunk(
  'users/editUserProfile',
  async (
    { id, name, login, password }: { id: string; name: string; login: string; password: string },
    thunkAPI
  ) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/users/${id}`,
        { name, login, password },
        config
      );
      return response.data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async ({ id }: { id: string | undefined }, thunkAPI) => {
    try {
      const response = await axios.delete(`${BASE_URL}/users/${id}`, config);
      return response.data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [editUserProfile.pending.type]: (state) => {
      state.isLoading = LoadingState.Loading;
      state.isFetching = false;
    },
    [editUserProfile.fulfilled.type]: (state) => {
      state.isLoading = LoadingState.Success;
      state.isFetching = true;
    },
    [editUserProfile.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = LoadingState.Error;
      state.errorMessage = action.payload;
    },
    [deleteUser.pending.type]: (state) => {
      state.isLoading = LoadingState.Loading;
      state.isFetching = false;
    },
    [deleteUser.fulfilled.type]: (state) => {
      state.isLoading = LoadingState.Success;
      state.isFetching = true;
    },
    [deleteUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = LoadingState.Error;
      state.errorMessage = action.payload;
    },
  },
});

export const usersReducer = userSlice.reducer;
