'use client';

import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import CategoryList from './CategoryList';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { GetAPI } from '../api/Api';

const mapContainerStyle = {
  width: '100%',
  height: '100vh',
};

const defaultCenter = {
  lat: 39.8283,
  lng: -98.5795,
};

const defaultZoom = 8;

const MapComponent = () => {
 // const navigate = usePathname();
   const router = useRouter();
  //const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const [map, setMap] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedGym, setSelectedGym] = useState(null);
  const [gymInfoWindow, setGymInfoWindow] = useState(null);
  const [filteredGymss, setFilteredGyms] = useState([]);
  const [mapCategories, setMaplist] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');

  const [filteredCategories, setFilteredCategories] = useState([]);
  console.log('cat',selectedCategory);

  useEffect(() => {
    const url = '/gym';
    GetAPI(url, (res) => {
      if (res?.status === 1 && Array.isArray(res.data)) {
        setMaplist(res.data);
        setFilteredGyms(res.data);

      } else {
        console.warn('Unexpected API response', res);
      }
    });
  }, []);

  useEffect(() => {
  }, [filteredGymss]);

  const onMapLoad = (mapInstance) => {
    setMap(mapInstance);

    const bounds = new window.google.maps.LatLngBounds();
    regionMarkers.forEach((region) => {
      bounds.extend(region.position);
    });
    mapInstance.fitBounds(bounds);

  };

  const onMapClick = () => {
    // setMarkers((current) => [
    //   ...current,
    //   {
    //     lat: event.latLng.lat(),
    //     lng: event.latLng.lng(),
    //     time: new Date(),
    //   },
    // ]);
  };

  useEffect(() => {
    if (
      selectedGym &&
      selectedGym.latitude &&
      selectedGym.longitude &&
      !isNaN(parseFloat(selectedGym.latitude)) &&
      !isNaN(parseFloat(selectedGym.longitude)) &&
      map
    ) {
      const location = {
        lat: parseFloat(selectedGym.latitude),
        lng: parseFloat(selectedGym.longitude),
      };
      map.panTo(location);
      map.setZoom(11);
    }
  }, [selectedGym, map]);

  useEffect(() => {
    if (map && filteredGymss.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      filteredGymss.forEach((gym) => {
        if (!isNaN(parseFloat(gym.latitude)) && !isNaN(parseFloat(gym.longitude))) {
          bounds.extend({
            lat: parseFloat(gym.latitude),
            lng: parseFloat(gym.longitude),
          });
        }
      });

      map.fitBounds(bounds);
    }
  }, [filteredGymss, map]);

  const slugify = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  const handleViewDetails = (gym) => {
    if (gymInfoWindow && gymInfoWindow.gymData && gymInfoWindow.gymData.id) {
      sessionStorage.setItem('selected_gym_id', gym.id);
      router.push(`/${slugify(gym.slug)}`);
    }
  };

  const handleGymSelectView = (gym) => {
    //console.log('Selected gym:', gym);
    setSelectedGym(gym);
    if (isMobile) {
      if (gym.id) {
        sessionStorage.setItem('selected_gym_id', gym.id);
        router.push(`/${slugify(gym.slug)}`);
      }
    }
  }

  const handleGymSelect = (gym) => {
    //console.log('Selected gym:', gym);
    setSelectedGym(gym);
    if (isMobile) {
      if (gymInfoWindow && gymInfoWindow.gymData && gymInfoWindow.gymData.id) {
        sessionStorage.setItem('selected_gym_id', gym.id);
        router.push(`/${slugify(gym.slug)}`);
      }
    }

    // Optional: Update filtered categories to show categories of selected gym only
    if (gym.category && Array.isArray(gym.category)) {
      //const categories = gym.category.map(cat => cat.name);
      // setFilteredCategories(categories); // if you're using this state
     // setSelectedCategory(categories);
    }

    if (
      gym.latitude &&
      gym.longitude &&
      !isNaN(parseFloat(gym.latitude)) &&
      !isNaN(parseFloat(gym.longitude))
    ) {
      setGymInfoWindow({
        position: {
          lat: parseFloat(gym.latitude),
          lng: parseFloat(gym.longitude),
        },
        gymData: gym,
      });

      if (map) {
        map.panTo({
          lat: parseFloat(gym.latitude),
          lng: parseFloat(gym.longitude),
        });
        map.setZoom(11);
      }
    }
  };

  useEffect(() => {
    //console.log("filteredGymss changed:", filteredGymss);
  }, [filteredGymss]);


  const handleViewPlaces = (position, regionName) => {
    setSelectedRegion(regionName);
    setSelectedCategory(null);
    setSelectedGym(null);
    setGymInfoWindow(null);

    const filtered = mapCategories.filter((gym) =>
      gym.category?.some((cat) => cat.name === regionName)
    );
    setFilteredGyms(filtered);

    const uniqueCategories = [
      ...new Set(
        filtered.flatMap((gym) =>
          gym.category?.map((cat) => cat.name) || []
        )
      ),
    ];
    setFilteredCategories(uniqueCategories);

    if (map && position) {
      map.panTo(position);
      map.setZoom(11);
    }
  };

  const regionMarkers = [
    {
      name: 'East Bay',
      position: { lat: 37.8044, lng: -122.2712 },
    },
    {
      name: 'North Bay',
      position: { lat: 38.1041, lng: -122.2566 },
    },
    {
      name: 'South Bay',
      position: { lat: 37.3382, lng: -121.8863 },
    },
    {
      name: 'Peninsula',
      position: { lat: 37.4419, lng: -122.1430 },
    },
    {
      name: 'San Francisco',
      position: { lat: 37.773972, lng: -122.431297 },
    },
    {
      name: 'SoCal',
      position: { lat: 34.1410876, lng: -120.425486 },
    },
    {
      name: 'Sacramento',
      position: { lat: 38.5616433, lng: -121.6265487 },
    },
  ];


  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    if (isIOS && map) {
      setTimeout(() => {
        const center = map.getCenter();
        window.google.maps.event.trigger(map, 'resize');
        map.panTo(center);
      }, 100); // slight delay after map load
    }
  }, [map]);

  const handleCategoryClick = (categoryName) => {
   setSelectedCategory(categoryName);

    if (categoryName === 'All') {
      setFilteredGyms(mapCategories); // original full list
      setSelectedRegion(null);
      return;
    }

    const gymsInCategory = mapCategories.filter((gym) =>
      gym.category?.some((cat) => cat.name === categoryName)
    );

    setFilteredGyms(gymsInCategory);
  };

  useEffect(() => {
    if (map && filteredGymss.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      filteredGymss.forEach((gym) => {
        if (!isNaN(parseFloat(gym.latitude)) && !isNaN(parseFloat(gym.longitude))) {
          bounds.extend({
            lat: parseFloat(gym.latitude),
            lng: parseFloat(gym.longitude),
          });
        }
      });
      map.fitBounds(bounds);
    }
  }, [filteredGymss, map]);

  const handleToggle = () => {
    setShowList(prev => !prev);
  };

  const [isMobile, setIsMobile] = useState(false);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile(); // On mount
    window.addEventListener('resize', checkMobile); // Watch resize

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <div className='col-lg-12 map_places text-center'>
        <ul style={{ padding: '0px', }}>
          <li className={`btn btn-primary`} onClick={() => handleCategoryClick('All')}>
            All
          </li>
          {regionMarkers.map((item, i) => (
            <li className={`btn btn-primary ${selectedRegion === item.name ? 'selected' : ''}`} onClick={() => handleViewPlaces(item.position, item.name)}
              key={i}>{item.name}</li>
          ))
          }
        </ul>
      </div>
      {isMobile && (
        <div className='row'>
          <div className='col-lg-4 col-sm-4 text-center border-top'>
            <button onClick={handleToggle} className="btn btn-primary mobile-toggle-button mb-3">
              {showList ? 'Map View' : 'List View'}
            </button>
          </div>
        </div>
      )}
      <div className="app-container">
        {!isMobile && (
          <>
            <CategoryList
              gyms={filteredGymss}
              categories={filteredCategories}
              onSelectCategory={handleGymSelect}
            />
            {/* <LoadScriptNext googleMapsApiKey={apiKey} libraries={libraries}> */}
              <div className='mapflexpass safari-only-fix'>
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  zoom={defaultZoom}
                  center={defaultCenter}
                  onLoad={onMapLoad}
                  onClick={onMapClick}
                  onUnmount={() => console.log("Map unmounted")}
                  onTilesLoaded={() => console.log("Tiles loaded")}
                  onError={(e) => console.error("Map error:", e)}
                >
                  {filteredGymss.map((gym, index) => (
                    <Marker
                      key={index}
                      position={{
                        lat: parseFloat(gym.latitude),
                        lng: parseFloat(gym.longitude),
                      }}
                      onClick={() => handleGymSelect(gym)}
                      title={gym.name}
                    />
                  ))}
                 
                  {gymInfoWindow && gymInfoWindow.gymData && (
                    <InfoWindow
                      position={gymInfoWindow.position}
                      onCloseClick={() => setGymInfoWindow(null)}>
                      <div style={{ maxWidth: '200px', textAlign: 'center' }}>
                        {gymInfoWindow.gymData.images && gymInfoWindow.gymData.images.length > 0 ? (
                          <Image
                            src={gymInfoWindow.gymData.images[0].imageurl}
                            alt={gymInfoWindow.gymData.name}
                            width={100}               
                            height={100}   
                            style={{ marginBottom: '8px', borderRadius: '10px' }}
                          />
                        ) : (
                          <Image
                            src={gymInfoWindow.gymData.image}
                            alt={gymInfoWindow.gymData.name}
                            width={100}               
                                  height={100}   
                            style={{ marginBottom: '8px', borderRadius: '10px' }}
                          />
                        )}
                        <h6 style={{ margin: '0 0 5px', fontSize: '13px' }}>{gymInfoWindow.gymData.name}</h6>
                        <p style={{ margin: 0, fontSize: '12px' }}>{gymInfoWindow.gymData.address}</p>
                        <button
                          className="btn btn-primary font_size p-2 mt-1"
                          onClick={() => handleViewDetails(gymInfoWindow.gymData)}
                        >
                          View details
                        </button>
                      </div>
                    </InfoWindow>
                  )}
                </GoogleMap>
              </div>
            {/* </LoadScriptNext> */}
          </>
        )}
        {isMobile && (
          <>
            {showList ? (
              <CategoryList
                gyms={filteredGymss}
                categories={filteredCategories}
                // onSelectCategory={handleGymSelect}
                onSelectCategory={handleGymSelectView}
              />
            ) : (
              // <LoadScriptNext googleMapsApiKey={apiKey} libraries={libraries}>
                <div className='mapflexpass safari-only-fix'>

                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={defaultZoom}
                    center={defaultCenter}
                    onLoad={onMapLoad}
                    onClick={onMapClick}
                    onUnmount={() => console.log("Map unmounted")}
                    onTilesLoaded={() => console.log("Tiles loaded")}
                    onError={(e) => console.error("Map error:", e)}
                  >
                    {filteredGymss.map((gym, index) => (
                      <Marker
                        key={index}
                        position={{
                          lat: parseFloat(gym.latitude),
                          lng: parseFloat(gym.longitude),
                        }}
                        onClick={() => handleGymSelect(gym)}
                        title={gym.name}
                      />
                    ))}
                    {gymInfoWindow && gymInfoWindow.gymData && (
                      <InfoWindow
                        position={gymInfoWindow.position}
                        onCloseClick={() => setGymInfoWindow(null)}>
                        <div style={{ maxWidth: '200px', textAlign: 'center' }}>
                          {gymInfoWindow.gymData.images && gymInfoWindow.gymData.images.length > 0 ? (
                            <Image
                              src={gymInfoWindow.gymData.images[0].imageurl}
                              alt={gymInfoWindow.gymData.name}
                              width={100}               
                                  height={100}   
                            style={{ marginBottom: '8px', borderRadius: '10px' }}
                            />
                          ) : (
                            <Image
                              src={gymInfoWindow.gymData.image}
                              alt={gymInfoWindow.gymData.name}
                              width={100}               
                                  height={100}   
                            style={{ marginBottom: '8px', borderRadius: '10px' }}
                            />
                          )}
                          <h6 style={{ margin: '0 0 5px', fontSize: '13px' }}>{gymInfoWindow.gymData.name}</h6>
                          <p style={{ margin: 0, fontSize: '12px' }}>{gymInfoWindow.gymData.address}</p>
                          <button
                            className="btn btn-primary font_size p-2 mt-1"
                            onClick={() => handleViewDetails(gymInfoWindow.gymData)}
                          >
                            View details
                          </button>
                        </div>
                      </InfoWindow>
                    )}
                  </GoogleMap>
                </div>
              // </LoadScriptNext>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default MapComponent;