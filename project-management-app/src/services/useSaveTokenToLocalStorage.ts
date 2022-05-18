import { useEffect } from 'react';
import { useAppSelector } from '../redux/hooks/reduxHooks';
import { loginSelector } from '../redux/selectors/AuthSelectors';

export const useSaveTokenToLocalStorage = () => {
  const { token } = useAppSelector(loginSelector);

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    }
  }, [token]);
};
