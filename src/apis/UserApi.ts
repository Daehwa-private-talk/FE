import { USER_PATH } from '@/constants/path/user';
import { getFullPath } from '@/utils/common';
import requester from '@/utils/requester';

const UserApi = {
  getUserInfo: () => {
    const path = getFullPath(USER_PATH);

    return requester.get(path);
  },
};

export default UserApi;
