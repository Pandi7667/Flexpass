
'use client';

import React, { useEffect, useState } from 'react';
import { GetAPI } from '../components/api/Api';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import DOMPurify from 'isomorphic-dompurify';


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

function AllGyms() {

  const router = useRouter();
  const [gymData, setGymData] = useState([]);
  //console.log('All Gyms',gymData);
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
      <div className='row mt-lg-0 ptop_innerpage_contact_bottom p-5'>
        <h2 className='border-bottom pb-3 text-center mb-4'>All Gyms</h2>
        {gymData.map((item, i) => {
          const cleanDescription = sanitizeHtml(item.description);
          const truncatedDescription =
            cleanDescription.length > 100 ? cleanDescription.slice(0, 100) + '...' : cleanDescription;

          return (
            <div key={i} className='col-lg-3 col-xl-3 col-sm-3 col-12 mb-4'>
              <div className='gym-list-card' style={{ cursor: 'pointer' }} onClick={() => handleViewDetails(item)}>
                {item.images?.length > 0 ? (
                  <Image
                    className='img-fluid'
                    alt={item.name}
                    src={item.images[0]?.imageurl}
                    width={356}
                    height={250}
                  />
                ) : (
                  <Image
                    className='img-fluid'
                    alt='No preview'
                    src={item.image}
                    width={356}
                    height={250}
                  />
                )}
                <div className='bx-padding'>
                  <h3>{item.name.length > 20 ? item.name.slice(0, 15) + '...' : item.name}</h3>
                  <p dangerouslySetInnerHTML={{ __html: truncatedDescription }} />

                  <p className='mb-0'>{item.date}</p>
                </div>
              </div>
            </div>
          );
        })}

{/* <ClientsList /> */}
      </div>
    </>
  );
}

export default AllGyms;