import { SignIn } from '@/@types/auth';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

export const useSignInController = () => {
  const { control, handleSubmit } = useForm<SignIn>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const submitSignInInfo: SubmitHandler<SignIn> = (data) => {
    console.log(data);
  };

  const catchError: SubmitErrorHandler<SignIn> = (error) => {
    console.log({ error });
  };

  const onSubmit = handleSubmit(submitSignInInfo, catchError);

  return {
    control,
    onSubmit,
  };
};
