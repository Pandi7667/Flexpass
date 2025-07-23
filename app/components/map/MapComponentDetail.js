'use client';

import React, { useState, useEffect } from 'react';
//import { GoogleMap, LoadScript, LoadScriptNext, Autocomplete, LoadScript, } from '@react-google-maps/api';

//import GoogleMap
//import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

//import { useLocation } from 'react-router-dom';
import { GetAPI } from '../api/Api';


const MapComponentDetail = () => {
    // const navigate = usePathname();
    const router = useRouter();
     const [gymData, setGymData] = useState([]);
     useEffect(() => {
    const url = '/gym';
    GetAPI(url, (res) => {
      if (res?.status === 1 && Array.isArray(res.data)) {
        setGymData(res.data);
        // setFilteredGyms(res.data);
      } else {
        console.warn('Unexpected API response', res);
      }
    });
  }, []);
  
  const slugify = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  const handleViewDetails = (gym) => {
    if (gym && gym.id) {
      sessionStorage.setItem('selected_gym_id', gym.id);
      router.push(`/${slugify(gym.slug)}`);
    }
  };

    return (
        <>
           <div className='row mt-lg-5 mb-lg-5'>
        <h2 className='pb-3 text-left mb-4 mt-4'>Other studios nearby </h2>
        {gymData.length >= 4 ? (
          gymData.slice(0, 4).map((item, i) => (
            <div key={i} className='col-lg-3 col-xl-3 col-sm-3 col-12 mb-4'>
              <div className='gym-list-card' onClick={() => handleViewDetails(item)} style={{ cursor: 'pointer' }}>
                <Image
                  className='img-fluid'
                  alt={item.name || 'No preview'}
                  src={item.images?.length > 0 ? item.images[0].imageurl : item.image}
                  width={300}
                  height={200}
                />
                <div className='bx-padding'>
                  <h3>{item.name.length > 20 ? item.name.slice(0, 15) + '...' : item.name}</h3>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Not enough gyms available.</p>
        )}
      </div>
        </>
    );
};

export default MapComponentDetail;