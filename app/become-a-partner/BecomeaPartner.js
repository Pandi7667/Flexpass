'use client';

import React from 'react'
import Link from 'next/link';
import becomeBanner from '../../public/images/becomepart/Partners-Hero-28129-scaled.webp';
function BecomeAPartner() {
  return (
    <>
      <div className='row ptop_bottom become' style={{ backgroundImage: `url(${becomeBanner.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundAttachment: 'scroll', backgroundSize: 'cover' }}>
        <div className='col-lg-10 col-sm-12 col-12 mx-auto'>
          <div className='row'>
            <div className='col-lg-6 col-sm-6 col-12'>
              <h1 className='text-left text-white'>Become a Partner        </h1>
              <p className='text-left text-white'>Partnering with Flex Pass allows gyms to attract more customers by offering flexible access to fitness classes and facilities; and increasing foot traffic and member engagement. With our user-friendly interface, gyms can easily manage bookings and promote their classes and amenities to a wider audience. Flex Pass enhances convenience, encouraging more frequent visits—which leads to greater membership retention and revenue growth for gym owners.</p>
              <p className='text-left text-white'>Flex Pass is more than just an app—it’s a community. It’s a way to connect with fitness and wellness lovers and help them achieve their goals. Join Flex Pass today and take your business to the next level!</p>
              <Link target='_blank' href={'https://calendar.google.com/calendar/u/0/appointments/AcZssZ3WIdHkeMiLvmZHfdCW7AAsMwG8UePbzUs5urQ='} className='btn btn-primary'>Book Demo</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='row align-items-center bg_white'>
        <div className='col-lg-12 col-xl-12 col-12 text-center'>
          <h5>LET’S CONNECT! </h5>
          <p className='mb-1'><strong>Shula Pormentira (Account Manager) </strong></p>
          <p className='mb-1'><strong>Phone: </strong><Link href={''}>(408) 772-3111</Link></p>
          <p className='mb-1'><strong>Email: </strong><Link href={''}>shula@myflexpass.com</Link></p>
          <Link href={'/contact-us'} className='btn btn-primary'>Contact Us</Link>
        </div>
      </div>
    </>
  )
}

export default BecomeAPartner