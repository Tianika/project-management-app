import { useNavigate } from 'react-router-dom';
import { Middleware, MiddlewareAPI } from 'redux';
import { isRejectedWithValue } from '@reduxjs/toolkit';
import { RoutersMap } from '../utils/constants';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    if (action.status === 401) {
      const navigate = useNavigate();

      navigate(RoutersMap.welcome);
    }
  }

  return next(action);
};
