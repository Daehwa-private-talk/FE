const BASE_URL =
  process.env.REACT_APP_NODE_ENV === 'production'
    ? process.env.REACT_APP_DEAHWA_URL_PROD
    : process.env.REACT_APP_DEAHWA_URL_DEV;
const MIDDLE_URL = '/v1/api';
const URL = {};

const SIGN_IN_PATH = '/auth/sign-in';
const SIGN_UP_PATH = '/auth/sign-up';
const LIST = '/list';

export { SIGN_IN_PATH, SIGN_UP_PATH, LIST, BASE_URL, MIDDLE_URL, URL };
