export interface FriendType {
  id: number;
  name: string;
  isFavorite: boolean;
  profileImage?: string;
  statusMessage?: string;
}

export type FriendsType = FriendType[];
