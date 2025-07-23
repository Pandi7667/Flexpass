import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // This could cause a redirect loop if /special-promotions is not available
    router.push('/special-promotions'); // This might be causing issues
  }, []);

  return <Component {...pageProps} />;
}
