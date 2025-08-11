/* eslint-disable no-undef */
import { renderHook } from '@testing-library/react';
import { AuthContext } from '../../services/context/authContext';
import { useAuth } from '../useAuth';
import React from 'react';

import { jest } from '@jest/globals';

describe('useAuth hook', () => {
  // mock-data for context
  const mockContext = {
    user: { name: 'Test User' },
    isLoading: false,
    error: null,
    signIn: jest.fn(),
    signOut: jest.fn(),
    register: jest.fn()
  };

// without jsx
  const wrapper = ({ children }) => React.createElement(
    AuthContext.Provider,
    { value: mockContext },
    children
  );

  test('should return auth context when used with AuthProvider', () => {
    const { result } = renderHook(() => useAuth(), { wrapper });
    expect(result.current).toEqual(mockContext);
  });

  test('should throw error when used outside AuthProvider', () => {
    const originalError = console.error;
    console.error = jest.fn();

    expect(() => {
      renderHook(() => useAuth());
    }).toThrow('useAuth must be used within an AuthProvider');

    console.error = originalError;
  });

  test('should return correct context values', () => {
    const { result } = renderHook(() => useAuth(), { wrapper });

    expect(result.current).toMatchObject({
      user: expect.any(Object),
      isLoading: expect.any(Boolean),
      error: expect.toBeNullOrType(expect.any(Object)),
      signIn: expect.any(Function),
      signOut: expect.any(Function),
      register: expect.any(Function)
    });
  });
});
