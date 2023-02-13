import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.1.12.203:3333',
});

export default api;