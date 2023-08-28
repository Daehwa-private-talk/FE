import { SignIn as SignInSchema } from '@/@types/auth';
import { SIGN_IN_DEFAULT_VALUE } from '@/constants/auth';
import { useAuth } from '@/hooks/atoms/useAuth';
import { useSignInQuery } from '@/hooks/models/auth/useSignInQuery.model';
import { signInSchema } from '@/schema/auth';
import { Cookie } from '@/utils/cookie';
import { yupResolver } from '@hookform/resolvers/yup';
import { isEmpty } from 'lodash';
import { SubmitHandler, useForm } from 'react-hook-form';

export const useSignInController = () => {
  const { setIsAuthenticated } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: yupResolver(signInSchema),
    defaultValues: SIGN_IN_DEFAULT_VALUE,
  });

  const { mutate } = useSignInQuery();

  const submitSignInInfo: SubmitHandler<SignInSchema> = (signInData) => {
    if (!signInData || !isEmpty(signInData)) {
      return;
    }

    mutate(signInData, {
      onSuccess: (response) => {
        const { accessToken, refreshToken } =
          response.data?.result?.token || {};

        const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
        const REFRESH_TOKEN = process.env.REACT_APP_REFRESH_TOKEN;

        if (ACCESS_TOKEN && REFRESH_TOKEN && accessToken && refreshToken) {
          Cookie.setCookie(ACCESS_TOKEN, accessToken);
          Cookie.setCookie(REFRESH_TOKEN, refreshToken);

          setIsAuthenticated(true);
        }
      },
      onError: () => {
        setIsAuthenticated(false);
      },
    });
  };

  const onSubmit = handleSubmit(submitSignInInfo);

  return {
    control,
    onSubmit,
    errors,
  };
};
