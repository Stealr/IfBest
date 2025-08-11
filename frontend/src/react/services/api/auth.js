import apiClient from '../apiClient';
import { ENDPOINTS } from '../apiConfig';

export const login = async (email, password) => {
  const response = await apiClient.post(ENDPOINTS.auth.login, { 
    email, 
    password 
  });
  return response.data; // => { access_token, refresh_token, user }
};

export const register = async (userData) => {
  const response = await apiClient.post(ENDPOINTS.auth.register, userData);
  return response.data; // => { access_token, refresh_token, user }
};

export const logout = async () => {
  await apiClient.post(ENDPOINTS.auth.logout);
};

export const checkStatus = async () => {
  const response = await apiClient.get(ENDPOINTS.auth.status);
  return response.data; // =>{ user }
};

export const refreshToken = async (refreshToken) => {
  const response = await apiClient.post(ENDPOINTS.auth.refresh, { 
    refresh_token: refreshToken 
  });
  return response.data; // =>{ access_token }
};