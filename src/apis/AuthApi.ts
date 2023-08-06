import { SignIn, SignUp as SignUpBase } from '@/@types/auth';
import { BASE_URL, SIGN_IN_PATH, SIGN_UP_PATH } from '@/constants/path';
import requester from '@/utils/requester';

type SignUp = Omit<SignUpBase, 'confirmPassword'>;

const AuthApi = {
  signIn: ({ email, password }: SignIn) => {
    return requester.post(BASE_URL + SIGN_IN_PATH, { email, password });
  },
  signUp: ({ name, email, birthday, password }: SignUp) => {
    return requester.post(BASE_URL + SIGN_UP_PATH, {
      name,
      email,
      birthday,
      password,
    });
  },
};

export default AuthApi;
