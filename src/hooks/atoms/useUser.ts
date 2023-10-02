import { UserType } from '@/@types/user';
import { atom, useAtom } from 'jotai';
import { omit } from 'lodash';
import { useEffect } from 'react';

const authAtom = atom<UserType>({
  id: -1,
  name: '나',
  friendsInfo: {
    friends: [],
    totalFriendsCount: 0,
  },
});

export const useUser = () => {
  const [user, setUser] = useAtom(authAtom);
  const userDefaultInfo = omit(user, ['token', 'friendsInfo']);

  useEffect(() => {
    if (user.id !== -1) {
      return;
    }
  }, []);

  return {
    user,
    setUser,
    userDefaultInfo,
  };
};
