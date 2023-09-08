export interface ListViewProps {
  isOpenSidebar: boolean;
  favoriteList: any[];
  friendList: any[];
  onClickChat: () => void;
  onClickSignOut: () => void;
  chatCount: number;
}
