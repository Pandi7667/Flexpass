'use client';
import { useLoadScript } from '@react-google-maps/api';
import Loader from './Loader';

export default function GoogleMapsProvider({ children }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <Loader />;

  return children;
}