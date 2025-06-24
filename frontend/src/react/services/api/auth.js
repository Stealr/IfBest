import apiClient from './apiClient';
import { ENDPOINTS } from './apiConfig';

export const login = async (email, password) => {
  const response = await apiClient.post(ENDPOINTS.auth.login, { 
    email, 
    password 
  });
  
  return {
    accessToken: response.data.access_token,
    refreshToken: response.data.refresh_token,
    user: response.data.user
  };
};

export const register = async (userData) => {
  const response = await apiClient.post(ENDPOINTS.auth.register, userData);
  
  return {
    accessToken: response.data.access_token,
    refreshToken: response.data.refresh_token,
    user: response.data.user
  };
};

export const logout = async () => {
  await apiClient.post(ENDPOINTS.auth.logout);
  localStorage.removeItem('authToken');
  localStorage.removeItem('refreshToken');
};

export const checkStatus = async () => {
  const response = await apiClient.get(ENDPOINTS.auth.status);
  return response.data.user;
};

export const refreshToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');
  const response = await apiClient.post(ENDPOINTS.auth.refresh, { 
    refresh_token: refreshToken 
  });
  
  localStorage.setItem('authToken', response.data.access_token);
  return response.data.access_token;
};