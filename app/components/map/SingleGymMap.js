"use client";
// components/SingleGymMap.js
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
// Custom icon definition
const customIcon = L.icon({
  iconUrl: '/icons/marker-icon.png',
  iconRetinaUrl: '/icons/marker-icon-2x.png',
  shadowUrl: '/icons/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
const SingleGymMap = ({ latitude, longitude, gym }) => {
    console.log('map gym',gym);
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (!latitude || !longitude || !mapContainerRef.current) return;

    // Destroy existing map if it exists
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
    }

     // Initialize new map
    const map = L.map(mapContainerRef.current, {
      center: [latitude, longitude],
      zoom: 15,
      scrollWheelZoom: false,
      zoomControl: true,
    });

    // // Initialize map
    // const map = L.map(mapContainerRef.current, {
    //   center: [latitude, longitude],
    //   zoom: 15,
    //   scrollWheelZoom: false,
    //   zoomControl: true,
    // });

    mapInstanceRef.current = map;

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

     // Add marker with custom icon
    L.marker([latitude, longitude], { icon: customIcon })
      .addTo(map)
      .bindPopup(`<b>${gym?.name || 'Gym'}</b><br/>${gym?.address || ''}, ${gym?.city || ''}`)
      .openPopup();

  }, [latitude, longitude, gym]);

  return (
    <div
      className='border rounded-5'
      ref={mapContainerRef}
      style={{ height: '428px', width: '100%', borderRadius: '8px', overflow: 'hidden' }}
    ></div>
  );
};

export default SingleGymMap;
