import { MenusType } from '@/@types/menu';
import { User } from '@/@types/user';
import SignIn from '@/domain/auth/SignIn';
import SignUp from '@/domain/auth/SignUp';
import Home from '@/domain/home';

export const MENUS: MenusType = [
  {
    title: 'home',
    path: '/',
    component: Home,
  },
  {
    title: 'auth',
    path: 'auth',
    children: [
      {
        title: '로그인',
        path: 'sign-in',
        component: SignIn,
      },
      {
        title: '회원가입',
        path: 'sign-up',
        component: SignUp,
      },
    ],
  },
];
