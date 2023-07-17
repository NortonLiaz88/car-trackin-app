import axios from 'axios';
import {API_URL} from '@react-native-dotenv';
import AsyncStorage from '@react-native-async-storage/async-storage';

console.log('API URL', API_URL);

const api = axios.create({
  baseURL: `${API_URL}`,
});

api.defaults.timeout = 8000;

api.interceptors.request.use(config => {
  const request = config;
  request.headers = {
    ...config.headers,
  };
  return request;
});

api.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const access_token = await AsyncStorage.getItem('@carTracking:token');
    if (error?.response?.status === 401 && access_token) {
      AsyncStorage.removeItem('@carTracking:token');
    }
    return Promise.reject(error);
  },
);

export default api;
