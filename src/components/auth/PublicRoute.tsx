import { RouteComponentType } from '@/@types/route';
import { LIST } from '@/constants/path/chat';
import NotFound from '@/domain/404';
import { useAuth } from '@/hooks/atoms/useAuth';
import { Navigate } from 'react-router-dom';

export const PublicRoute = function ({
  component: Component,
}: RouteComponentType) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated && Component) {
    return <Navigate to={LIST} />;
  }

  if (isAuthenticated && !Component) {
    return <NotFound />;
  }

  return Component ?? <NotFound />;
};
