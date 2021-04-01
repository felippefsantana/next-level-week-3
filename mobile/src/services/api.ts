import axios from 'axios';

const api = axios.create({
  baseURL: 'http://26.73.180.21:3333',
});

export default api;
