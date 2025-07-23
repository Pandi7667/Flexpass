
'use client';

import ErrorBoundary from '../components/ErrorBoundary';
import dynamic from 'next/dynamic';

const GymDetailsClient = dynamic(() => import('./GymDetailPage'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function GymDetailsWrapper({ gym, slug }) {
  return (
    <ErrorBoundary>
      <GymDetailsClient gym={gym} slug={slug} />
    </ErrorBoundary>
  );
}
