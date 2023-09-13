import React from 'react';
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
    <ListView
      isOpenSidebar={true}
      favoriteList={[dummy[0]]}
      friendList={dummy}
      onClickChat={() => {}}
      onClickSignOut={() => {}}
      chatCount={1000}
    />
  );
};

export default List;
