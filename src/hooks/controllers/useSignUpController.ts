import { SignUp } from '@/@types/auth';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

export const useSignUpController = () => {
  const { control, handleSubmit } = useForm<SignUp>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const submitSignUpInfo: SubmitHandler<SignUp> = (data) => {
    console.log(data);
  };

  const catchError: SubmitErrorHandler<SignUp> = (error) => {
    console.log({ error });
  };

  const onSubmit = handleSubmit(submitSignUpInfo, catchError);

  return {
    control,
    onSubmit,
  };
};