import { useNavigate } from 'react-router-dom';

export const useHomeController = () => {
  const navigate = useNavigate();

  const handleClickRouteSignIn = () => {
    navigate('/sign-in');
  };

  const handleClickRouteSignUp = () => {
    navigate('/sign-up');
  };

  return {
    onClickRouteSignIn: handleClickRouteSignIn,
    onClickRouteSignUp: handleClickRouteSignUp,
  };
};
