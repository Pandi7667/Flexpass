// app/[slug]/page.js
'use client';
import { useEffect, useState, useRef } from 'react';
import assets from '../components/Assets'
import { GetAPI } from '../components/api/Api';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import ClientsList from '../components/clients/Clients'
import FAQSection from '../components/faq/FAQ'
//import { GoogleMap, Marker } from '@react-google-maps/api';

import DOMPurify from 'isomorphic-dompurify';
//import MapView from '../components/map/MapView';
import SingleGymMap from '../components/map/SingleGymMap'

export const sanitizeHtml = (dirtyHtml = '') => {
  const cleanedHtml = dirtyHtml
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return DOMPurify.sanitize(cleanedHtml, {
    ALLOWED_TAGS: ['p', 'strong', 'br', 'em', 'ul', 'li', 'a'],
    ALLOWED_ATTR: ['href', 'target'],
  });
};

// const mapContainerStyle = {
//   width: '100%',
//   height: '400px',
// };

const GymDetailsPage = ({ gym, slug }) => {
  const router = useRouter();
  const { id } = useParams();
  const [mapDetails, setMapDetails] = useState(gym || {});
  const [gymData, setGymData] = useState([]);
  const mapRef = useRef(null);

  useEffect(() => {
    const gymId = sessionStorage.getItem('selected_gym_id');

    if (!gymId) {
      //router.push('/partners');
    }

    //console.log('gymId',gymId);
    const url = `/gym/${gymId}`;
    GetAPI(url, (res) => {
      if (res?.status === 1 && Array.isArray(res.data) && res.data.length > 0) {
        setMapDetails(res.data[0]);
      } else {
        console.warn('Unexpected API response', res);
      }
    });
  }, [id, slug]);

  useEffect(() => {
    if (slug && gymData?.length) {
      const decodedSlug = decodeURIComponent(slug);
      const matchedGym = gymData.find(
        gym => gym.slug.toLowerCase() === decodedSlug.toLowerCase()
      );

      if (matchedGym) {
        setMapDetails(matchedGym);
        sessionStorage.setItem('selected_gym_id', matchedGym.id);
      } else {
        console.warn('No gym found with slug:', slug);
        router.push('/pagenot', { replace: true }); // redirect to /404
      }
    }
  }, [slug, gymData]);

  var settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        window.google &&
        mapRef.current &&
        mapDetails.latitude &&
        mapDetails.longitude
      ) {
        const position = {
          lat: parseFloat(mapDetails.latitude),
          lng: parseFloat(mapDetails.longitude),
        };

        const map = new window.google.maps.Map(mapRef.current, {
          center: position,
          zoom: 15,
        });

        new window.google.maps.Marker({
          position,
          map,
          title: mapDetails.address,
        });

        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [mapDetails]);

    const cleanDescription = sanitizeHtml(mapDetails.description);
    const getFqa = gym?.faqs;

  return (
    <>
      <div className='mt-lg-0 ptop_innerpage_contact_bottom'>
        <div className='container'>
          <div className='row'>
        <div className='col-lg-12'>
          <h1 className='border-bottom pb-3 text-center mb-4'>{mapDetails.name}</h1>
        </div>
        <div className='col-lg-12'>
          <div className='row mb-3'>
            <div className='col-lg-4 col-sm-4 col-12'>
              <div className='gym-img-details border rounded-5'>
                {Array.isArray(mapDetails.images) && mapDetails.images.length > 0 ? (
                  <Slider {...settings}>
                    {mapDetails.images.map((img, idx) => (
                      <div key={idx}>
                        <Image width={300}
                          height={200}
                          className='rounded-5'
                          objectFit="contain" alt={mapDetails.name} src={img.imageurl} />
                      </div>
                    ))}
                  </Slider>
                ) : (
                    <>
                      {mapDetails?.image ? (
                        <Image
                          alt={mapDetails.name || 'Gym image'}
                          width={300}
                          height={200}
                          className='rounded-5'
                          style={{ objectFit: 'contain' }}
                          src={mapDetails.image}
                        />
                      ) : (
                        <></>
                      )}
              </>
                )}
              </div>
            </div>
            {/* <div style={{ width: 300, height: 200, background: '#ccc' }}>
                No Image Available
              </div> */}
            <div className='col-lg-4 col-sm-4 col-12'>
              <div className='card-bx h-100 mb-4 border rounded-5'>
                <div className='row align-items-center h-100'>
                  <div className='col-lg-12 col-sm-12 col-12'>
                    <h3 className='mb-3'>Contact</h3>
                    <p><i style={{ color: '#2167b2' }} className="fas fa-clock" aria-hidden="true"></i> {mapDetails.name} <br />
                      {mapDetails.address}</p>
                    <p><i style={{ color: '#2167b2' }} className="fas fa-phone" aria-hidden="true"></i> {mapDetails.phoneno}</p>
                    <p><i style={{ color: '#2167b2' }} className="fas fa-envelope" aria-hidden="true"></i> {mapDetails.emailid}</p>
                    <p><i style={{ color: '#2167b2' }} className="fas fa-globe" aria-hidden="true"></i> {mapDetails.website}</p>
                    <div className='footer_grid'>
                      <div className="social_profile">
                        <ul>
                          {mapDetails.facebook && (
                            <li><Link href={mapDetails.facebook}><i className="fab fa-facebook-f"></i></Link></li>
                          )}
                          {mapDetails.xlink && (
                            <li><Link href={mapDetails.xlink}><i className="fab fa-twitter"></i></Link></li>
                          )}
                          {mapDetails.google && (
                            <li><Link href={mapDetails.google}><i className="fab fa-google-plus-g"></i></Link></li>
                          )}
                          {mapDetails.insta && (
                            <li><Link href={mapDetails.insta}><i className="fab fa-instagram"></i></Link></li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-12">
             {/* <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={{
                    lat: parseFloat(mapDetails.latitude) || 39.8283,
                    lng: parseFloat(mapDetails.longitude) || -98.5795
                  }}
                  zoom={15}
                >
                  <Marker position={{
                    lat: parseFloat(mapDetails.latitude) || 39.8283,
                    lng: parseFloat(mapDetails.longitude) || -98.5795
                  }} />
                </GoogleMap>
              </LoadScript> */}
              {/* <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={{
                    lat: parseFloat(mapDetails.latitude) || 39.8283,
                    lng: parseFloat(mapDetails.longitude) || -98.5795,
                  }}
                  zoom={15}
                >
                  <Marker
                    position={{
                      lat: parseFloat(mapDetails.latitude) || 39.8283,
                      lng: parseFloat(mapDetails.longitude) || -98.5795,
                    }}
                  />
                </GoogleMap> */}
              {/* {mapDetails.latitude && mapDetails.longitude && (
                    <GoogleMap
                      mapContainerStyle={mapContainerStyle}
                      center={{ lat: +mapDetails.latitude, lng: +mapDetails.longitude }}
                      zoom={15}
                    >
                      <Marker
                        position={{ lat: +mapDetails.latitude, lng: +mapDetails.longitude }}
                      />
                    </GoogleMap>
                  )} */}
                    {/* {mapDetails && mapDetails.latitude && mapDetails.longitude && (
                  <MapView
                    latitude={mapDetails.latitude}
                    longitude={mapDetails.longitude}
                  />
                )} */}
                    {/* <MapView
                latitude={mapDetails.latitude}
                longitude={mapDetails.longitude}
              /> */}
                  <SingleGymMap
                    latitude={+mapDetails.latitude}
                    longitude={+mapDetails.longitude}
                    gym={mapDetails}
                  />
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
      <div className='align-items-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-xl-12 col-12 text-left pt-lg-5 pb-lg-5 pt-3 pb-3'>
              {/* <p>{mapDetails.description?.replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim()}</p> */}
              <div className='card border rounded-3 text-left shadow-sm'>
                <div className='card-body p-3 text-left'>
                  <div className="sanitized-html" dangerouslySetInnerHTML={{ __html: cleanDescription }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-lg-5 mb-lg-5'>
        <FAQSection getFqa={getFqa} />
      </div>
      <div className='align-items-center bg_blue'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-xl-12 col-12 text-center'>
              <div className='d-flex justify-content-center align-items-center'>
                <div><h3 className='mb-0 me-4'><Link href={'/download-the-app'} className='text-white' style={{ textDecoration: 'none' }}>Get the App</Link></h3></div>
                <div>
                  <div className='app-icons pt-2'>
                    <Link href={'https://play.google.com/store/apps/details?id=com.inc.flexpass'}><Image alt='playstore' style={{ width: '200px', height: '68px' }} src={assets.playstore} /></Link>
                    <Link href={'https://apps.apple.com/us/app/flex-pass-inc/id6479203678'}><Image alt='appstore' style={{ width: '200px', height: '68px' }} src={assets.appstore} /></Link>
                  </div>
                </div>
              </div>
            </div>
         </div>
        </div>
      </div>
      
      <div className='mt-lg-0 mb-lg-0'>
  {/* <h2 className='pb-3 text-left mb-4 mt-4'>Other studios nearby</h2> */}
  <ClientsList />

  {/* {gymData.length >= 4 ? (
    gymData.slice(0, 4).map((item, i) => {
      const fallbackImage = '/default-gym.jpg'; 
      const imageUrl =
        item?.images?.length > 0 && item.images[0]?.imageurl
          ? item.images[0].imageurl
          : item.image || fallbackImage;

      return (
        <div key={i} className='col-lg-3 col-xl-3 col-sm-3 col-12 mb-4'>
          <div
            className='gym-list-card'
            onClick={() => handleViewDetails(item)}
            style={{ cursor: 'pointer' }}
          >
            {imageUrl ? (
              <Image
                className='img-fluid'
                alt={item.name}
                src={imageUrl}
                style={{ objectFit: 'contain' }}
                width={300}
                height={200}
              />
            ) : (
              <div style={{ width: 300, height: 200, background: '#ccc' }}>
                No image
              </div>
            )}
            <div className='bx-padding'>
              <h3>
                {item.name.length > 20
                  ? item.name.slice(0, 15) + '...'
                  : item.name}
              </h3>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <p>Not enough gyms available.</p>
  )} */}
</div>

      {/* <div className='row mt-lg-5 mb-lg-5'>
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
      </div> */}
    </>
  );
};

export default GymDetailsPage;
