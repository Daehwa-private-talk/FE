import { signInSchema } from '@/@schema/auth';
import { SignIn } from '@/@types/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useSignInQuery } from '@/hooks/models/auth/useSignInQuery.model';
import { useEffect, useState } from 'react';
import { SIGN_IN_DEFAULT_VALUE } from '@/constants/auth';
import { useNavigate } from 'react-router-dom';

export const useSignInController = () => {
  const [isValidSignIn, setIsValidSignIn] = useState<boolean>(false);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignIn>({
    resolver: yupResolver(signInSchema),
    defaultValues: SIGN_IN_DEFAULT_VALUE,
  });

  const [email, password] = watch(['email', 'password']);

  const { data, isLoading, isSuccess, isError } = useSignInQuery(
    { email, password },
    !errors && isValidSignIn && email && password,
  );

  const submitSignInInfo: SubmitHandler<SignIn> = (data) => {
    if (data) {
      setIsValidSignIn(true);
    }
  };

  const catchError: SubmitErrorHandler<SignIn> = () => {
    setIsValidSignIn(false);
  };

  const onSubmit = handleSubmit(submitSignInInfo, catchError);

  useEffect(() => {
    if (data?.status === 200 && isSuccess) {
      navigate('/list');
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
