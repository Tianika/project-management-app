import { Navigate } from 'react-router-dom';
import { ReactElement } from 'react';
import { useAppSelector } from '../redux/hooks/reduxHooks';
import { authSelector } from '../redux/selectors/AuthSelectors';
import { RoutersMap } from '../utils/constants';

type AnonymousRouteType = {
  redirectPath: string;
  children: ReactElement;
};

const AnonymousRoute = ({ redirectPath = RoutersMap.main, children }: AnonymousRouteType) => {
  const { token } = useAppSelector(authSelector);
  return token ? <Navigate to={redirectPath} replace /> : children;
};

export default AnonymousRoute;
