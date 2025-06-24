import PropTypes from 'prop-types';
import { createContext, useState, useEffect, useContext, useCallback } from 'react';
import { 
  login as apiLogin, 
  register as apiRegister, 
  logout as apiLogout, 
  checkStatus,
  refreshToken as apiRefreshToken
} from '../services/api/auth';

const AuthContext = createContext();

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};//угождаем линтеру)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);

  // token check on loading
  const checkAuth = useCallback(async () => {
    try {
      const accessToken = localStorage.getItem('authToken');
      if (!accessToken) {
        setIsLoading(false);
        return;
      }

      try {
        const userData = await checkStatus();
        setUser(userData);
      } catch (statusError) {
        // if invalid - try to update token
        console.error('Status check failed:', statusError);
        const newToken = await apiRefreshToken();
        localStorage.setItem('authToken', newToken);
        const userData = await checkStatus();
        setUser(userData);
      }
    } catch (error) {
      console.error('Authentication check failed:', error);
      setError(error);
      signOut();
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
      localStorage.setItem('authToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
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
      localStorage.setItem('authToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
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
      localStorage.removeItem('authToken');
      localStorage.removeItem('refreshToken');
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

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};