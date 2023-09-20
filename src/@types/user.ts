interface Default {
  id: number;
  name: string;
  profileImage?: string;
  statusMessage?: string;
}

export interface UserType extends Default {}

export interface FriendType extends Default {
  isFavorite: boolean;
}

export type FriendsType = FriendType[];
