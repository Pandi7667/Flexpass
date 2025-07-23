"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
//import Head from "next/head";
//import gymData from "../data/gyms.json";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { GetAPI } from "../components/api/Api";

const MapView = dynamic(() => import("../components/map/MapView"), { ssr: false });

export default function Home() {
  const [gyms, setGyms] = useState([]);

 useEffect(() => {
    const url = '/gym';
    GetAPI(url, (res) => {
      if (res?.status === 1 && Array.isArray(res.data)) {
        const cleanedGyms = res.data
          .map(g => ({
            ...g,
            name: g.name?.trim(),
            zone: g.zone?.trim(),
            city: g.city?.trim(),
            latitude: parseFloat(g.latitude),
            longitude: parseFloat(g.longitude),
            category: Array.isArray(g.category) && g.category.length > 0 ? g.category[0].name.trim() : ""
          }))
          .filter(g => !isNaN(g.latitude) && !isNaN(g.longitude));

        setGyms(cleanedGyms);
      } else {
        console.warn('Unexpected API response', res);
      }
    });
  }, []);

  return (
    <>
      <MapView gyms={gyms} />
    </>
  );
}