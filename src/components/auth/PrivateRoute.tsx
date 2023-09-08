import { RouteComponentType } from '@/@types/auth';
import { SIGN_IN_PATH } from '@/constants/path/auth';
import NotFound from '@/domain/404';
import { useAuth } from '@/hooks/atoms/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = function ({
  component: Component,
}: RouteComponentType) {
  // const { isAuthenticated } = useAuth();

  // if (!isAuthenticated) {
  //   return <Navigate to={SIGN_IN_PATH} />;
  // }

  return Component ?? <NotFound />;
};
