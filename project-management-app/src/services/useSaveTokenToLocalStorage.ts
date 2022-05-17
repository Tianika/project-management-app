import { useEffect } from 'react';
import { useAppSelector } from '../redux/hooks/reduxHooks';
import { loginSelector } from '../redux/selectors/AuthSelectors';
import { loginFormSlice } from '../redux/reducers/LoginFormSlice';

export const useSaveTokenToLocalStorage = () => {
  const { token } = useAppSelector(loginSelector);
  const { setToken } = loginFormSlice.actions;

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    }
  }, [token]);

  useEffect(() => {
    const tokenLocal = localStorage.getItem('token');
    if (tokenLocal) {
      setToken(tokenLocal);
    }
  }, [setToken]);
};
