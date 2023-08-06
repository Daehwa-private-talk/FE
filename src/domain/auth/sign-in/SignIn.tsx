import { useSignInController } from '@/hooks/controllers/useSignInController';
import { SignInView } from './SignIn.view';

const SignIn = () => {
  const { control, onSubmit, errors, isLoading } = useSignInController();

  return isLoading ? (
    <>로그인 중</>
  ) : (
    <SignInView control={control} onSubmit={onSubmit} errors={errors} />
  );
};

export default SignIn;
