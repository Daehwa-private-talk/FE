import { ProfileLayout } from '@/components/layout/ProfileLayout';
import { ListView } from './List.view';

const dummy = [
  {
    id: 1,
    name: 'Riahn',
    isFavorite: true,
    statusMessage: '저는 리안입니다',
  },
  {
    id: 2,
    name: 'Hani',
    isFavorite: false,
    statusMessage: '저는 하니입니다',
  },
  {
    id: 3,
    name: 'Shef',
    isFavorite: false,
    statusMessage: '저는 세프입니다',
  },
];

const List = () => {
  return (
    <ProfileLayout
      userInfo={{
        id: -1,
        name: 'Heman',
        profileImage: '#',
        statusMessage: '이것은 상태메세지입니다.',
      }}
      isOpenSidebar={true}
      onClickChat={() => {}}
      onClickSignOut={() => {}}
      chatCount={1000}
    >
      <ListView favoriteList={[dummy[0]]} friendList={dummy} />
    </ProfileLayout>
  );
};

export default List;
