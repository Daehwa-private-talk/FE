import { ProfileLayout } from '@/components/layout/ProfileLayout';
import { useUser } from '@/hooks/atoms/useUser';
import { useFriendListController } from '@/hooks/controllers/list/useFriendListController';
import { Cookie } from '@/utils/cookie';
import { ListView } from './List.view';

const List = () => {
  const {
    friends,
    favoriteFriends,
    favoriteFriendsCount,
    totalFriendsCount,
  } = useFriendListController();
  const { userDefaultInfo } = useUser();

  return (
    <ProfileLayout
      userInfo={userDefaultInfo}
      isOpenSidebar={true}
      onClickChat={() => {}}
      onClickSignOut={() => {
        Cookie.removeCookie(process.env.REACT_APP_ACCESS_TOKEN || '');
        Cookie.removeCookie(process.env.REACT_APP_REFRESH_TOKEN || '');
      }}
      chatCount={1000}
    >
      <ListView
        favoriteList={favoriteFriends}
        totalFriendsCount={totalFriendsCount}
        friendList={friends}
        favoriteFriendsCount={favoriteFriendsCount}
      />
    </ProfileLayout>
  );
};

export default List;
