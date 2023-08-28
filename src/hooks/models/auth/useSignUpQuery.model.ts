import { SignUp } from '@/@types/auth';
import AuthApi from '@/apis/AuthApi';
import { useMutation } from 'react-query';

export const useSignUpQuery = () => {
  const queryFn = (params: SignUp) => AuthApi.signUp(params);

  return useMutation(queryFn);
};
