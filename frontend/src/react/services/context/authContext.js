import { createContext, useState, useEffect, useCallback } from 'react';
import { 
  login as apiLogin, 
  register as apiRegister, 
  logout as apiLogout, 
  checkStatus,
  refreshToken as apiRefreshToken
} from '../services/api/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const [error, setError] = useState(null);

  const storeTokens = (accessToken, refreshToken) => {
    localStorage.setItem('authToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  };

  const clearTokens = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
  };

  const getRefreshToken = () => localStorage.getItem('refreshToken');

  // token check on loading
  const checkAuth = useCallback(async () => {
    try {
      const accessToken = localStorage.getItem('authToken');
      if (!accessToken) {
        setIsLoading(false);
        return;
      }

      try {
        const { user } = await checkStatus();
        setUser(user);
      } catch (statusError) {
        // if invalid - try to update token
        console.error('Status check failed:', statusError);
        const refreshToken = getRefreshToken();
        if (refreshToken) {
          const { access_token } = await apiRefreshToken(refreshToken);
          storeTokens(access_token, refreshToken);
          const { user } = await checkStatus();
          setUser(user);
        } else {
          throw new Error('No refresh token available');
        }
      }

    } catch (error) {
      console.error('Authentication check failed:', error);
      setError(error);
      clearTokens();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const signIn = async (email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      const { accessToken, refreshToken, user } = await apiLogin(email, password);
      storeTokens(accessToken, refreshToken);
      setUser(user);
    } catch (error) {
      console.error('Login failed:', error);
      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData) => {
    setIsLoading(true);
    setError(null);
    try {
      const { accessToken, refreshToken, user } = await apiRegister(userData);
      storeTokens(accessToken, refreshToken);
      setUser(user);
    } catch (error) {
      console.error('Registration failed:', error);
      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setIsLoading(true);
    try {
      await apiLogout();
      clearTokens();
      setUser(null);
      setError(null);
    } catch (error) {
      console.error('Logout failed:', error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user,
        isLoading,
        error,
        signIn,
        signOut,
        register
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};