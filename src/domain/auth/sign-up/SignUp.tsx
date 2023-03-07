import { useSignUpController } from '@/hooks/controllers/useSignUpController';
import { SignUpView } from './SignUp.view';

const SignIn = () => {
  const { control, onSubmit } = useSignUpController();

  return <SignUpView control={control} onSubmit={onSubmit} />;
};

export default SignIn;
