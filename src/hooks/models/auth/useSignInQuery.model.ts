import { SignIn } from '@/@types/auth';
import AuthApi from '@/apis/AuthApi';
import { useQuery } from 'react-query';

export const useSignInQuery = (params: SignIn, isValidSignIn: boolean) => {
  const queryKey = ['auth', 'sign-in', params.email];
  const queryFn = () => AuthApi.signIn(params);

  return useQuery(queryKey, queryFn, {
    enabled: isValidSignIn,
    onSuccess: (response) => {
      const { accessToken, refreshToken } = response.data?.result?.token || {};

      const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
      const REFRESH_TOKEN = process.env.REACT_APP_REFRESH_TOKEN;

      if (ACCESS_TOKEN && REFRESH_TOKEN && accessToken && refreshToken) {
        localStorage.setItem(ACCESS_TOKEN, accessToken);
        localStorage.setItem(REFRESH_TOKEN, refreshToken);
      }
    },
  });
};
