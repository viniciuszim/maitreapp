import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://93.188.167.15:8585/api/v1',
  baseURL: 'http://localhost:3001',
});

export default api;
