'use client';

import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GetAPI } from '../api/Api';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
//import GetAPI from '../api/Api'
//import { Link, useNavigate } from 'react-router-dom';

function Clients() {
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

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    // cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

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
      <div className='col'>
        <h2 className='mb-2 mb-sm-3 mb-lg-3 mt-0 text-center'>Partners</h2>
        <Slider {...settings}>
          {mapCategories.map((item, index) => (
            <div key={index}>
              <div className='client-img d-flex justify-content-center align-items-center'>
                <Image
                                  src={item.image}
                                  alt={item.name}
                                  width={300}               
                                  height={100}              
                                  className="img-fluid"
                                  style={{ cursor: 'pointer' }}
                                  onClick={() => handleViewDetails(item)}
                                  />
                {/* <Image style={{ cursor: 'pointer' }} alt={item.name} onClick={() => handleViewDetails(item)} src={item.image} className='img-fluid' /> */}
                {/* <Link target='_blank' to={item.website}><img alt={item.name} src={item.image} className='img-fluid' /></Link> */}
              </div>
              {/* <h5>{item.website}</h5> */}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Clients