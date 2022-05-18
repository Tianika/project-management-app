import { Navigate } from 'react-router-dom';
import { ReactElement } from 'react';
import { useAppSelector } from '../redux/hooks/reduxHooks';
import { loginSelector } from '../redux/selectors/AuthSelectors';
import { RoutersMap } from '../utils/constants';

type PrivateRouteType = {
  children: ReactElement;
};

const PrivateRoute = ({ children }: PrivateRouteType) => {
  const { token } = useAppSelector(loginSelector);

  return !token ? <Navigate to={RoutersMap.login} replace /> : children;
};

export default PrivateRoute;
