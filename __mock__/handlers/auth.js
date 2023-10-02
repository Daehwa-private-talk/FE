import { rest } from 'msw';

const signInResult = {
  id: -1,
  name: 'Heman',
  profileImage: '#',
  statusMessage: '이것은 상태메세지입니다.',
  token: {
    accessToken: 'test-mouth-heman-access-token',
    refreshToken: 'test-mouth-heman-refresh-token',
  },
};

export const authHandlers = [
  rest.post('*/auth/sign-in', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: {
          message: 'OK',
          code: 2000,
        },
        success: true,
        result: signInResult,
      }),
    );
  }),
  rest.post('*/auth/sign-up', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: {
          message: 'OK',
          code: 2000,
        },
        success: true,
        result: {},
      }),
    );
  }),
];
