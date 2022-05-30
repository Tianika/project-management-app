import { Navigate } from 'react-router-dom';
import { ReactElement } from 'react';
import { useAppSelector } from '../redux/hooks/reduxHooks';
import { authSelector } from '../redux/selectors/AuthSelectors';
import { RoutersMap } from '../utils/constants';

type PrivateRouteType = {
  children: ReactElement;
};

const PrivateRoute = ({ children }: PrivateRouteType) => {
  const { token } = useAppSelector(authSelector);

  return !token ? <Navigate to={RoutersMap.signIn} replace /> : children;
};

export default PrivateRoute;
