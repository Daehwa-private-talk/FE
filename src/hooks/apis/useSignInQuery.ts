import { SignIn } from '@/@types/auth';
import AuthApi from '@/apis/AuthApi';
import { useQuery } from '@tanstack/react-query';

export const useSignInQuery = (params: SignIn, isValidSignIn: boolean) => {
  const queryKey = ['auth', 'sign-in'];
  const queryFn = () => AuthApi.signIn(params);

  return useQuery(queryKey, queryFn, {
    enabled: isValidSignIn,
  });
};
