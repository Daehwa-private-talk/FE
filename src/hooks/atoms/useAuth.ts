import { TOKEN } from '@/constants/common';
import { SIGN_IN_PATH } from '@/constants/path';
import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';
import { redirect } from 'react-router-dom';

const authAtom = atom<boolean>(false);

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useAtom(authAtom);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN);

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
