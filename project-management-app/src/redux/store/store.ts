import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import changeToggleReducer from '../reducers/LanguageSlice';
import { authApi } from '../services/AuthService';
import { modalReducer } from '../reducers/ModalSlice';
import { boardsReducer } from '../reducers/BoardsSlice';
import { authReducer } from '../reducers/AuthSlice';
import { commonApi } from '../services/common.api';
import confirmReducer from '../reducers/ConfirmWindowSlice';
import { boardReducer } from '../reducers/BoardSlice';

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  changeToggleReducer,
  confirmReducer,
  modal: modalReducer,
  boards: boardsReducer,
  board: boardReducer,
  auth: authReducer,
  [commonApi.reducerPath]: commonApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

export { store };

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
