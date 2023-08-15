import { SignIn, SignUp } from '@/@types/auth';
import {
  BASE_URL,
  MIDDLE_URL,
  SIGN_IN_PATH,
  SIGN_UP_PATH,
} from '@/constants/path';
import requester from '@/utils/requester';

const AuthApi = {
  signIn: ({ email, password }: SignIn) => {
    console.log('api : ', BASE_URL + MIDDLE_URL + SIGN_IN_PATH);

    return requester.post(BASE_URL + MIDDLE_URL + SIGN_IN_PATH, {
      email,
      password,
    });
  },
  signUp: ({ name, email, nickname, password }: SignUp) => {
    console.log('api : ', BASE_URL + MIDDLE_URL + SIGN_UP_PATH);

    return requester.post(BASE_URL + MIDDLE_URL + SIGN_UP_PATH, {
      name,
      email,
      nickname,
      password,
    });
  },
};

export default AuthApi;
