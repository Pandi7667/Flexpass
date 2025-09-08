
'use client';

import React, { useEffect, useState } from 'react';
import assets from '../components/Assets';
// import { useNavigate } from 'react-router-dom';
import Clients from '../components/clients/Clients'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import CardDesign from '../components/carddesign/CardDesign';
function Homepage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    {
      src: assets.banner_01,
      interval: 5000,
      caption: {
        title: 'One Key to Unlocking ',
        title_: 'Infinite Possibilities',
        text: "Unlock Multiple Gym's Access With One App and One Membership",
      },
    },
    {
      src: assets.banner_03,
      interval: 5000,
      caption: {
        title: 'One Key to Unlocking ',
        title_: 'Infinite Possibilities',
        text: "Unlock Multiple Gym's Access With One App and One Membership",
      },
    },
    {
      src: assets.banner_04,
      interval: 5000,
      caption: {
        title: 'One Key to Unlocking ',
        title_: 'Infinite Possibilities',
        text: "Unlock Multiple Gym's Access With One App and One Membership",
      },
    },
     {
      src: assets.homebanner,
      interval: 5000,
      caption: {
        title: 'One Key to Unlocking ',
        title_: 'Infinite Possibilities',
        text: "Unlock Multiple Gym's Access With One App and One Membership",
      },
    },
    //  {
    //   src: assets.homebanner_new,
    //   interval: 5000,
    //   caption: {
    //     title: 'One Key to Unlocking ',
    //     title_: 'Infinite Possibilities',
    //     text: "Unlock Multiple Gym's Access With One App and One Membership",
    //   },
    // },
  ];
 // const navigate = useNavigate(); homebanner_new
 const router = useRouter();
  const DownApp = () => {
   router.push('/download-the-app')
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, images[activeIndex].interval); // respect per-slide interval

    return () => clearInterval(interval); // cleanup
  }, [activeIndex]);

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col p-0'>
            <div className="carousel carosel_bx slide carousel-fade position-relative" data-bs-ride="carousel" style={{ overflow: 'hidden' }}>
              <div className="carousel-inner">
                {images.map((item, index) => (
                  <div
                    className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                    key={index}
                    style={{ transition: 'opacity 1s ease-in-out' }}
                  >
                    {/* <img src={item.src} className="d-block w-100" alt="Slide" /> */}
                    <Image src={item.src} className="d-block w-100" alt="Slide"
                      style={{ objectFit: 'cover' }}
                      priority={index === 0}
                      width={222} height={222} />
                    <div className="carousel-caption d-none d-md-block"
                      data-aos="fade-up"
                      data-aos-duration="3000" >
                      <h1>{item.caption.title}</h1>
                      <h1>{item.caption.title_}</h1>
                      <p>{item.caption.text}</p>
                      <button onClick={DownApp} className="download btn btn-primary">Download App</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    <CardDesign />
    <Clients />
    </>
  )
}

export default Homepage