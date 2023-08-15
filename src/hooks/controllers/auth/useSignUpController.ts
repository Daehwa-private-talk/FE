import { signUpSchema } from '@/@schema/auth';
import { SignUp, SignUpSchema } from '@/@types/auth';
import { SIGN_UP_DEFAULT_VALUE } from '@/constants/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useSignUpQuery } from '@/hooks/models/auth/useSignUpQuery.model';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SIGN_IN_PATH } from '@/constants/path';
import { isEmpty, omit } from 'lodash';

export const useSignUpController = () => {
  const [isValidSignUp, setIsValidSignUp] = useState<boolean>(false);
  const [userData, setUserData] = useState<SignUp>();
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

  const [name, email, nickname, password] = watch([
    'name',
    'email',
    'nickname',
    'password',
  ]);

  const { data, isLoading, isSuccess, isError } = useSignUpQuery(
    { email, name, nickname, password },
    Boolean(isEmpty(errors) && isValidSignUp && userData),
  );

  const submitSignUpInfo: SubmitHandler<SignUpSchema> = (signUpData) => {
    if (signUpData) {
      setIsValidSignUp(true);
      setUserData(omit(signUpData, 'confirmPassword'));
    }
  };

  const catchError: SubmitErrorHandler<SignUpSchema> = () => {
    setIsValidSignUp(false);
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
