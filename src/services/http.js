import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3001/api',
  timeout: 3001,
});

export default http;
