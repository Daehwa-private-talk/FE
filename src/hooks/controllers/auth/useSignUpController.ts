import { SignUpSchema } from '@/@types/auth';
import { SIGN_IN_PATH } from '@/constants/path/auth';
import { useSignUpQuery } from '@/hooks/models/auth/useSignUpQuery.model';
import { signUpSchema } from '@/schema/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { isEmpty, omit } from 'lodash';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const SIGN_UP_DEFAULT_VALUE = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const useSignUpController = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: yupResolver(signUpSchema),
    defaultValues: SIGN_UP_DEFAULT_VALUE,
  });

  const { mutate } = useSignUpQuery();

  const submitSignUpInfo: SubmitHandler<SignUpSchema> = (signUpData) => {
    if (!signUpData || isEmpty(signUpData)) {
      return;
    }

    mutate(omit(signUpData, 'confirmPassword'), {
      onSuccess: () => {
        navigate(SIGN_IN_PATH);
      },
    });
  };

  const onSubmit = handleSubmit(submitSignUpInfo);

  return {
    control,
    onSubmit,
    errors,
  };
};
