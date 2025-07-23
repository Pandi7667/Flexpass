'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Loader from './Loader';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); // Simulate transition or wait for real data if needed

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
}
