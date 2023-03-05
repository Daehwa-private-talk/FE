import { MenusType } from '@/@types/menu';
import SignIn from '@/domain/auth/sign-in/SignIn';
import SignUp from '@/domain/auth/sign-up/SignUp';
import Home from '@/domain/home';

export const PUBLIC_MENUS: MenusType = [
  {
    title: 'home',
    path: '/',
    component: <Home />,
  },
  {
    title: 'auth',
    path: '/auth',
    children: [
      {
        title: '로그인',
        path: '/sign-in',
        component: <SignIn />,
      },
      {
        title: '회원가입',
        path: '/sign-up',
        component: <SignUp />,
      },
    ],
  },
];

export const PRIVATE_MENUS: MenusType = [
  {
    title: 'list',
    path: '/list',
    component: <>list</>,
  },
];
