import { rest } from 'msw';

const me = {
  id: -1,
  name: 'Heman',
  profileImage: '#',
  statusMessage: '이것은 상태메세지입니다.',
  friendsInfo: {
    totalFriendsCount: 3,
    friends: [
      {
        id: 1,
        name: 'Riahn',
        isFavorite: true,
        statusMessage: '저는 리안입니다',
      },
      {
        id: 2,
        name: 'Shaw',
        isFavorite: false,
        statusMessage: '저는 쇼입니다',
      },
      {
        id: 3,
        name: 'Shef',
        isFavorite: false,
        statusMessage: '저는 세프입니다',
      },
    ],
  },
};

export const userHandlers = [
  rest.get('*/user', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: {
          message: 'OK',
          code: 2000,
        },
        success: true,
        result: me,
      }),
    );
  }),
];
