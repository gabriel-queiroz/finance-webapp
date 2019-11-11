import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3333',
  timeout: 3001,
});

http.interceptors.request.use(async request => {
  request.headers.Authorization =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU3MzQ4MDUyNSwiZXhwIjoxNTczNTE2NTI1fQ.bfcehD3tG2yb414N2byfvrjs_hgd50UqQA2Lbx5UoNE';
  return request;
});

export default http;
