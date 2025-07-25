'use client';
import { createContext, useContext, useState } from 'react';

const LoadingContext = createContext({
  loading: false,
  setLoading: () => {}, // removed type annotation
});

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
