import { Navigate } from 'react-router-dom';
import { ReactElement } from 'react';
import { useAppSelector } from '../redux/hooks/reduxHooks';
import { userLoggedSelector } from '../redux/selectors/AuthSelectors';
import { RoutersMap } from '../utils/constants';

type AnonymousRouteType = {
  redirectPath: string;
  children: ReactElement;
};

const AnonymousRoute = ({ redirectPath = RoutersMap.main, children }: AnonymousRouteType) => {
  const isLogged = useAppSelector(userLoggedSelector);
  return isLogged ? <Navigate to={redirectPath} replace /> : children;
};

export default AnonymousRoute;
