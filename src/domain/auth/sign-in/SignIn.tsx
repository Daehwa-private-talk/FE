import { useSignInController } from '@/hooks/controllers/auth/useSignInController';
import { SignInView } from './SignIn.view';

const SignIn = () => {
  const { control, onSubmit, errors } = useSignInController();

  return <SignInView control={control} onSubmit={onSubmit} errors={errors} />;
};

export default SignIn;
