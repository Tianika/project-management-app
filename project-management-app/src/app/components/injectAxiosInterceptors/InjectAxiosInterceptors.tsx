import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {
  setupInterceptors401,
  setupInterceptorsToken,
} from '../../../redux/services/axios.common.api';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks';
import { authSelector } from '../../../redux/selectors/AuthSelectors';
import { useLogoutRedirectToWelcome } from '../../../services/useLogoutRedirectToWelcome';
import { closeModal } from '../../../redux/reducers/ModalSlice';

const InjectAxiosInterceptors = () => {
  const navigate = useNavigate();
  const { token } = useAppSelector(authSelector);
  const [logoutUser] = useLogoutRedirectToWelcome();
  const dispatch = useAppDispatch();
  const closeError = () => {
    dispatch(closeModal());
  };

  useEffect(() => {
    setupInterceptors401(navigate, logoutUser, closeError);
    setupInterceptorsToken(token);
  }, [dispatch, logoutUser, navigate, token]);

  return null;
};

export default InjectAxiosInterceptors;
