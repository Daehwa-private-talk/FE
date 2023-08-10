import axios from 'axios';

const TIME_OUT = 1000 * 120;

const requester = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? process.env.DEAHWA_URL_PROD
      : process.env.DEAHWA_URL_DEV,
  timeout: TIME_OUT,
  withCredentials: true,
});

requester.interceptors.response.use(
  (response) => response,
  (error) => {},
);

export default requester;
