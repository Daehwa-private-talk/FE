import { signInSchema } from '@/@schema/auth';
import { SignIn as SignInSchema } from '@/@types/auth';
import { SIGN_IN_DEFAULT_VALUE } from '@/constants/auth';
import { LIST } from '@/constants/path';
import { useSignInQuery } from '@/hooks/models/auth/useSignInQuery.model';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const useSignInController = () => {
  const [isValidSignIn, setIsValidSignIn] = useState<boolean>(false);
  const navigate = useNavigate();
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
    !errors && isValidSignIn && email && password,
  );

  const submitSignInInfo: SubmitHandler<SignInSchema> = (signInData) => {
    if (signInData) {
      setIsValidSignIn(true);
    }
  };

  const catchError: SubmitErrorHandler<SignInSchema> = () => {
    setIsValidSignIn(false);
  };

  const onSubmit = handleSubmit(submitSignInInfo, catchError);

  useEffect(() => {
    if (data?.status === 200 && isSuccess) {
      navigate(LIST);
    }

    if (isValidSignIn && isError) {
      setIsValidSignIn(false);
    }
  }, [isValidSignIn, data, isError]);

  return {
    control,
    onSubmit,
    errors,
    isLoading,
  };
};
