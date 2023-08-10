import { signUpSchema } from '@/@schema/auth';
import { SignUp, SignUpSchema } from '@/@types/auth';
import { SIGN_UP_DEFAULT_VALUE } from '@/constants/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useSignUpQuery } from '@/hooks/models/auth/useSignUpQuery.model';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SIGN_IN_PATH } from '@/constants/path';

export const useSignUpController = () => {
  const [isValidSignUp, setIsValidSignUp] = useState<boolean>(false);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: yupResolver(signUpSchema),
    defaultValues: SIGN_UP_DEFAULT_VALUE,
  });

  const [name, email, birthday, password] = watch([
    'name',
    'email',
    'birthday',
    'password',
  ]);

  const { data, isLoading, isSuccess, isError } = useSignUpQuery(
    { email, name, birthday, password },
    !errors && isValidSignUp && email && name && birthday && password,
  );

  const submitSignUpInfo: SubmitHandler<SignUp> = (data) => {
    console.log(data);
  };

  const catchError: SubmitErrorHandler<SignUp> = (error) => {
    console.log({ error });
  };

  const onSubmit = handleSubmit(submitSignUpInfo, catchError);

  useEffect(() => {
    if (data?.status === 200 && isSuccess) {
      window.alert('회원가입 성공!');
      navigate(SIGN_IN_PATH);
    }

    if (isValidSignUp && isError) {
      setIsValidSignUp(false);
    }
  }, [isValidSignUp, data, isError]);

  return {
    control,
    onSubmit,
    errors,
    isLoading,
  };
};
