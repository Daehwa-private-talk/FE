import axios from 'axios';

const TIME_OUT = 1000 * 120;

const requester = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: TIME_OUT,
  withCredentials: true,
});

requester.interceptors.response.use(
  (response) => response,
  (error) => {},
);

export default requester;
