import { SIGN_IN_PATH } from '@/constants/path/auth';
import { Cookie } from '@/utils/cookie';
import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';
import { redirect } from 'react-router-dom';

const authAtom = atom<boolean>(false);

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useAtom(authAtom);

  useEffect(() => {
    const token = Cookie.getCookie(process.env.REACT_APP_ACCESS_TOKEN || '');

    if (!token) {
      setIsAuthenticated(false);
      redirect(SIGN_IN_PATH);

      return;
    }

    setIsAuthenticated(true);
  }, []);

  return {
    isAuthenticated,
    setIsAuthenticated,
  };
};
