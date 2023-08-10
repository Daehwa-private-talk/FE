import { SignUp } from '@/@types/auth';
import AuthApi from '@/apis/AuthApi';
import { useQuery } from 'react-query';
import { omit } from 'lodash';

export const useSignUpQuery = (params: SignUp, isValidSignIn: boolean) => {
  const queryKey = ['auth', 'sign-up', omit(params, 'password')];
  const queryFn = () => AuthApi.signUp(params);

  return useQuery(queryKey, queryFn, {
    enabled: isValidSignIn,
  });
};
