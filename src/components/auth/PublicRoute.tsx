import { RouteComponentType } from '@/@types/auth';
import { LIST } from '@/constants/path';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({
  isAuthenticated,
  component: Component,
}: RouteComponentType) => {
  if (isAuthenticated && Component) {
    return <Navigate to={LIST} />;
  }

  if (isAuthenticated && !Component) {
    return null;
  }

  return Component ?? null;
};

export default PublicRoute;
