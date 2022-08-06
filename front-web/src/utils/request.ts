import axios from 'axios';

const baseURL = process.env.DS_SALES_BACKEND ?? 'http://localhost:8080';

export const makeRequest = axios.create({
  baseURL
});
