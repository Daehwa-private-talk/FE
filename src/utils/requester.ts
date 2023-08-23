import axios from 'axios';

const TIME_OUT = 1000 * 120;

const requester = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_DEAHWA_URL_DEV
      : process.env.REACT_APP_DEAHWA_URL_PROD,

  timeout: TIME_OUT,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

requester.interceptors.response.use(
  (response) => response,
  (error) => {},
);

export default requester;
