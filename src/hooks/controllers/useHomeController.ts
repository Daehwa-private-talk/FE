import { SIGN_IN_PATH, SIGN_UP_PATH } from '@/constants/path/auth';
import { useNavigate } from 'react-router-dom';

export const useHomeController = () => {
  const navigate = useNavigate();

  const handleClickRouteSignIn = () => {
    navigate(SIGN_IN_PATH);
  };

  const handleClickRouteSignUp = () => {
    navigate(SIGN_UP_PATH);
  };

  return {
    onClickRouteSignIn: handleClickRouteSignIn,
    onClickRouteSignUp: handleClickRouteSignUp,
  };
};
