'use client';

import { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import Slider from "react-slick";
import { GetAPI } from '../api/Api';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
//import GetAPI from '../api/Api'
//import { Link, useNavigate } from 'react-router-dom';

function ClientsList() {
  const [mapCategories, setMaplist] = useState([]);

  useEffect(() => {
    const url = '/gym';
    GetAPI(url, (res) => {
      if (res?.status === 1 && Array.isArray(res.data)) {
        setMaplist(res.data);
        // setFilteredGyms(res.data);
      } else {
        console.warn('Unexpected API response', res);
      }
    });
  }, []);

  //console.log('Partners', mapCategories);


  //const navigate = useNavigate();
  const router = useRouter();

  const slugify = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  const handleViewDetails = (gym) => {
    if (gym && gym.id) {
      sessionStorage.setItem('selected_gym_id', gym.id);
      router.push(`/${slugify(gym.slug)}`);
    }
  };

  return (
    <div className='row slick_slider'>
        {mapCategories.map((item, i) => (
          <div key={i} className='col-lg-3 col-xl-3 col-sm-3 col-12 mb-4'>
            <div className='gym-list-card' style={{cursor:'pointer'}} onClick={() => handleViewDetails(item)}>
             {/* <a href={`/${item.slug}`} rel="noopener noreferrer"> */}
               {item.images?.length > 0 ? (
                 <Image
                  className='img-fluid'
                  alt={item.name}
                  src={item.images[0]?.imageurl}
                  width={356}
                  height={250}
                />
              ) : (
                // Optional fallback image:
                <Image
                  className='img-fluid'
                  alt='No preview'
                  src={item.image}
                  width={356}
                  height={250}
                />
              )}
             {/* </a> */}
              <div className='bx-padding'>
                <h3>{item.name.length > 20 ? item.name.slice(0, 15) + '...' : item.name}</h3>
                <p>{item.description.length > 100 ? item.description.slice(0, 100) + '...' : item.description}</p>
                <p className='mb-0'>{item.date}</p>
              </div>
            </div>
          </div>
        ))} 
    </div>
  )
}

export default ClientsList