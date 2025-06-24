import axios from 'axios';
import { refreshToken } from './auth';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // URL из .env //мб исправить
    // baseURL: `${import.meta.env.VITE_API_URL}/auth`, на вот такой вариант
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

// Это прикрeпление токена
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await refreshToken();
        localStorage.setItem('authToken', newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        console.error('Refresh token failed', refreshError);
        localStorage.removeItem('authToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login'; // redirect
        return Promise.reject(refreshError);
      }
    }

// тут обработка общих ошибок

    if (error.response) {
            // errors from server
            switch (error.response.status) {
                case 400:
                    console.error('Bad Request:', error.response.data);
                    break;
                case 403:
                    console.error('Forbidden:', error.response.data);
                    window.location.href = '/forbidden'; // нужно ли это
                    break;
                case 404:
                    console.error('Not Found:', error.response.data);
                    break;
                case 500:
                    console.error('Server Error:', error.response.data);
                    break;
                default:
                    console.error('Unhandled Error:', error.response.data);
            }
        } else if (error.request) {
            console.error('No response received:', error.request);
        } else {
            //other errors
            console.error('Request setup error:', error.message);
        }

    return Promise.reject(error);
  }
);

export default apiClient;
