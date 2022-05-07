import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/AuthSlice';
import changeToggleReducer from '../reducers/CheckBoxSlice';
import { authAPI } from '../services/AuthService';
import { modalReducer } from '../reducers/ModalSlice';
import { boardsReducer } from '../reducers/BoardsSlice';

const rootReducer = combineReducers({
  authReducer,
  [authAPI.reducerPath]: authAPI.reducer,
  changeToggleReducer,
  modal: modalReducer,
  boards: boardsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authAPI.middleware),
});

export { store };

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
