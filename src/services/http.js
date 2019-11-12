import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3333',
  timeout: 3001,
});

http.interceptors.request.use(async request => {
  request.headers.Authorization =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU3MzU5ODI1OSwiZXhwIjoxNTczNjM0MjU5fQ.vwgamiNx_dLNpQUb1GxziZAndytdr1EAwpQaQnI_ruE';
  return request;
});

export default http;
