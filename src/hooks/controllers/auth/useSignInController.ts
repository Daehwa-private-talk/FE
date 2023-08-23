import { SignIn as SignInSchema } from '@/@types/auth';
import { SIGN_IN_DEFAULT_VALUE } from '@/constants/auth';
import { SERVER_SUCCESS_CODE } from '@/constants/code';
import { useAuth } from '@/hooks/atoms/useAuth';
import { useSignInQuery } from '@/hooks/models/auth/useSignInQuery.model';
import { signInSchema } from '@/schema/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { isEmpty } from 'lodash';
import { useEffect, useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

export const useSignInController = () => {
  const [isValidSignIn, setIsValidSignIn] = useState<boolean>(false);
  const { setIsAuthenticated } = useAuth();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: yupResolver(signInSchema),
    defaultValues: SIGN_IN_DEFAULT_VALUE,
  });

  const [email, password] = watch(['email', 'password']);

  const { data, isLoading, isSuccess, isError } = useSignInQuery(
    { email, password },
    Boolean(isEmpty(errors) && isValidSignIn && email && password),
  );

  const submitSignInInfo: SubmitHandler<SignInSchema> = (signInData) => {
    if (!isEmpty(signInData)) {
      setIsValidSignIn(true);
    }
  };

  const catchError: SubmitErrorHandler<SignInSchema> = () => {
    setIsValidSignIn(false);
  };

  const onSubmit = handleSubmit(submitSignInInfo, catchError);

  useEffect(() => {
    if (data?.data.status.code === SERVER_SUCCESS_CODE && isSuccess) {
      setIsAuthenticated(true);
    }

    if (isValidSignIn && isError) {
      setIsValidSignIn(false);
    }

    return () => setIsValidSignIn(false);
  }, [isValidSignIn, data, isError]);

  return {
    control,
    onSubmit,
    errors,
    isLoading,
  };
};
