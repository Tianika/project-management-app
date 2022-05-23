import { useNavigate } from 'react-router-dom';
import { RoutersMap } from '../utils/constants';

export type TokenExpirationHandlerType = {
  status: number;
};

export const useTokenExpirationHandler = (response: TokenExpirationHandlerType) => {
  const navigate = useNavigate();

  const tokenExpirationHandler = () => {
    if (response.status === 401) {
      navigate(RoutersMap.welcome);
    }
  };

  return [tokenExpirationHandler];
};
