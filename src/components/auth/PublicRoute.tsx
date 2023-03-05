import { RouteComponentType } from '@/@types/auth';
import { LIST } from '@/constants/path';
import NotFound from '@/domain/404';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({
  isAuthenticated,
  component: Component,
}: RouteComponentType) => {
  if (isAuthenticated && Component) {
    return <Navigate to={LIST} />;
  }

  if (isAuthenticated && !Component) {
    return <NotFound />;
  }

  return Component ?? <NotFound />;
};

export default PublicRoute;
