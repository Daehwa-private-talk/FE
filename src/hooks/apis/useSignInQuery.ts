import { SignIn } from '@/@types/auth';
import AuthApi from '@/apis/AuthApi';
import { useQuery } from '@tanstack/react-query';

export const useSignInQuery = ({ email, password }: SignIn) => {
  const queryKey = ['auth', 'sign-in'];
  const queryFn = () => AuthApi.signIn({ email, password });

  return useQuery(queryKey, queryFn, {
    onError: (error) => console.log(error),
  });
};
