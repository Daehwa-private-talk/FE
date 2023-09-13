import { FriendsType } from './user';

export interface ListViewProps {
  isOpenSidebar: boolean;
  favoriteList: FriendsType;
  friendList: FriendsType;
  onClickChat: () => void;
  onClickSignOut: () => void;
  chatCount: number;
}
