import { useNavigate } from 'react-router-dom';
import { RoutersMap } from '../utils/constants';
import { deleteUserInfoFromLocalStorage } from './deleteUserInfoFromLocalStorage';
import { useAppDispatch } from '../redux/hooks/reduxHooks';
import { authSlice } from '../redux/reducers/AuthSlice';

export const useLogoutRedirectToWelcome = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { clearUserInfo } = authSlice.actions;

  const logoutUser = () => {
    dispatch(clearUserInfo());
    deleteUserInfoFromLocalStorage();
    navigate(RoutersMap.welcome);
  };

  return [logoutUser];
};
