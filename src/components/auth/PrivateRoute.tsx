import { RouteComponentType } from '@/@types/auth';
import { SIGN_IN_PATH } from '@/constants/path';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({
  isAuthenticated,
  component: Component,
}: RouteComponentType) => {
  if (!isAuthenticated) {
    return <Navigate to={SIGN_IN_PATH} />;
  }

  return Component ?? null;
};

export default PrivateRoute;
