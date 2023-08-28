import axios from 'axios';
import { Cookie } from './cookie';
import AuthApi from '@/apis/AuthApi';

const TIME_OUT = 1000 * 120;

const requester = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_DAEHWA_URL_DEV
      : process.env.REACT_APP_DAEHWA_URL_PROD,

  timeout: TIME_OUT,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

requester.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    const refreshToken = Cookie.getCookie(
      process.env.REACT_APP_REFRESH_TOKEN || '',
    );

    console.log(error.response, originalRequest, refreshToken);

    // if (error.response) {
    //   return AuthApi.refresh({ refreshToken }).then((response) => {
    //     if (response.data?.result) {
    //       Cookie.setCookie(REFRESH_TOKEN, response.data.result.refreshToken);
    //       Cookie.setCookie(ACCESS_TOKEN, response.data.result.accessToken);
    //     }
    //   });
    // }
  },
);

export default requester;
