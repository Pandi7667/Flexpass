'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLoading } from '../context/LoadingContext'; 

export default function LoaderResetter() {
  const pathname = usePathname();
  const { setLoading } = useLoading();

  useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 500); 

  return () => clearTimeout(timer);
}, [pathname]);

  return null;
}
