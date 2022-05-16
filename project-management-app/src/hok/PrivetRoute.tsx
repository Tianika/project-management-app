import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks/reduxHooks';
import { userLoggedSelector } from '../redux/selectors/AuthSelectors';
import { RoutersMap } from '../utils/constants';

type PrivetRouteType = {
  children: React.ReactElement;
};

const PrivetRoute = ({ children }: PrivetRouteType) => {
  const isLogged = useAppSelector(userLoggedSelector);
  return !isLogged ? <Navigate to={RoutersMap.register} replace /> : children;
};

export default PrivetRoute;
