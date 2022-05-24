import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {
  setupInterceptors401,
  setupInterceptorsToken,
} from '../../../redux/services/axios.common.api';
import { useAppSelector } from '../../../redux/hooks/reduxHooks';
import { authSelector } from '../../../redux/selectors/AuthSelectors';
import { useLogout } from '../../../services/useLogout';

const InjectAxiosInterceptors = () => {
  const navigate = useNavigate();
  const { token } = useAppSelector(authSelector);

  useEffect(() => {
    setupInterceptors401(navigate, useLogout);
    setupInterceptorsToken(token);
  }, [navigate, token]);

  return null;
};

export default InjectAxiosInterceptors;
