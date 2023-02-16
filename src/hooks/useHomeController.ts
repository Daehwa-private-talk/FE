import { useNavigate } from 'react-router-dom';

export const useHomeController = () => {
  const navigate = useNavigate();

  const handleClickRouteSignIn = () => {
    navigate('/auth/sign-in');
  };

  const handleClickRouteSignUp = () => {
    navigate('/auth/sign-up');
  };

  return {
    onClickRouteSignIn: handleClickRouteSignIn,
    onClickRouteSignUp: handleClickRouteSignUp,
  };
};
