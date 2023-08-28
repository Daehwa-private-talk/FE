import { SignIn } from '@/@types/auth';
import AuthApi from '@/apis/AuthApi';

import { useMutation } from 'react-query';

export const useSignInQuery = () => {
  const queryFn = (params: SignIn) => AuthApi.signIn(params);

  return useMutation(queryFn);
};
