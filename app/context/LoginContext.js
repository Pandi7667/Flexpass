'use client';

import React, { createContext, useContext, useState } from 'react';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logout = () => {
    setUser(null);
    // Optional: clear cookies/localStorage, redirect, etc.
    //window.location.href = '/home';
  };

  return (
    <LoginContext.Provider value={{ user, setUser, isLoggedIn: !!user, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useLogin must be used within a LoginProvider');
  }
  return context;
};
