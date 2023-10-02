import { UsersFriendInfo } from '@/@types/user';
import { useUser } from '@/hooks/atoms/useUser';
import { useState } from 'react';

export const useFriendListController = () => {
  const { user } = useUser();
  const [friendsInfo, setFriendsInfo] = useState<UsersFriendInfo>(
    user.friendsInfo,
  );

  const favoriteFriends = friendsInfo.friends.filter(
    (friend) => friend.isFavorite,
  );
  const favoriteFriendsCount = favoriteFriends.length;

  return {
    friendsInfo,
    setFriendsInfo,
    friends: friendsInfo.friends,
    totalFriendsCount: friendsInfo.totalFriendsCount,
    favoriteFriends,
    favoriteFriendsCount,
  };
};
