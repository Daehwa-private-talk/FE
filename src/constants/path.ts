const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.DEAHWA_URL_PROD
    : process.env.DEAHWA_URL_DEV;
const SIGN_IN_PATH = '/auth/sign-in';
const SIGN_UP_PATH = '/auth/sign-up';
const LIST = '/list';

const URL = {};

export { SIGN_IN_PATH, SIGN_UP_PATH, LIST, BASE_URL, URL };
