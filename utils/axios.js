import axios from 'axios';
require('dotenv').config();

const axiosInstance = axios.create({
  baseURL: process.env.API_BASE_PATH,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
})

export default axiosInstance;
