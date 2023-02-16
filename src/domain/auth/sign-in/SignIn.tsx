import { useSignInController } from '@/hooks/controllers/useSignInController';
import { SignInView } from './SignIn.view';

const SignIn = () => {
  const { control, onSubmit } = useSignInController();

  return <SignInView control={control} onSubmit={onSubmit} />;
};

export default SignIn;
