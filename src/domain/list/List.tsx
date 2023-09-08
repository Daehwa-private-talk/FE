import React from 'react';
import ListView from './List.view';

const List = () => {
  return (
    <ListView
      isOpenSidebar={true}
      favoriteList={[]}
      friendList={[]}
      onClickChat={() => {}}
      onClickSignOut={() => {}}
      chatCount={1000}
    />
  );
};

export default List;
