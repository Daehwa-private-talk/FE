import { rest } from 'msw';

const me = {
  id: -1,
  name: 'Heman',
  profileImage: '#',
  statusMessage: '이것은 상태메세지입니다.',
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
