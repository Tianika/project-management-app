import { useEffect } from 'react';
import { useAppSelector } from '../redux/hooks/reduxHooks';
import { authSelector } from '../redux/selectors/AuthSelectors';

export const useSaveTokenToLocalStorage = () => {
  const { name, login, token, userId } = useAppSelector(authSelector);

  useEffect(() => {
    if (token && userId && login) {
      localStorage.setItem('login', login);
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);
    }
    if (name) {
      localStorage.setItem('name', name);
    }
  }, [login, name, token, userId]);
};
