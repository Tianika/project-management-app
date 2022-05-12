import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/AuthSlice';
import changeToggleReducer from '../reducers/CheckBoxSlice';
import { authAPI } from '../services/AuthService';

const rootReducer = combineReducers({
  authReducer,
  [authAPI.reducerPath]: authAPI.reducer,
  changeToggleReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
