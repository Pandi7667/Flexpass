'use client';

import React from 'react'
import assets from '../components/Assets';
import Clients from '../components/clients/Clients';
import Link from 'next/link';
import Image from 'next/image';
function Membership() {
  return (
    <>
      <div className='row'>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
          <iframe
            src="https://player.vimeo.com/video/1009214989?&color&autopause=0&loop=1&muted=1&title=0&portrait=0&byline=0&h=c5465e426b&autoplay=1"
            title="Membership Video"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: '0'
            }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className='row bg_dark_member align-items-center'>
        <div className='col-lg-6 col-xl-6 col-12'>
          <h2 className='text-white'>Access Multiple<br />
            Fitness Studios With One <br /> Affordable Membership</h2>
          <p className='text-white'>FLEXPASS offers access to a variety of fitness classes across multiple gyms with a single, low-cost membership. Customize your costs, freeze your membership, and use your credits anytime. Enjoy easy booking, cancellation, and top-notch customer service. Download FLEXPASS today and start your free trial!</p>
          <Link className='btn btn-primary' href={'/download-the-app'}>Download the App</Link>
        </div>
        <div className='col-lg-6 col-xl-6 col-12'>
          <Image alt='myflexpass' style={{ border: '1px solid #000000', borderRadius: '30px', height: '100%', width: '100%' }} className='img-fluid' src={assets.memberShipbanner01} />
        </div>
      </div>
      <div className='row align-items-center bg_white'>
        <div className='col-lg-6 col-xl-6 col-12'>
          <Image alt='myflexpass' style={{ border: '1px solid #000000', borderRadius: '30px', height: '100%', width: '100%' }} className='img-fluid' src={assets.memberShipbanner02} />
        </div>
        <div className='col-lg-6 col-xl-6 col-12'>
          <h2 className=''>Get Fit and <span style={{ color: '#2167b2' }}>Have Fun</span></h2>
          <p className=''>Discover the perfect fitness routine with FLEXPASS, the ultimate app for accessing top gyms and studios. Easily browse classes, choose between monthly credits or pay-as-you-go, and explore a variety of workouts. FLEXPASS offers flexibility and convenience, breaking free from traditional memberships.</p>
        </div>
      </div>
      <div className='row align-items-center bg_blue'>
        <div className='col-lg-12 col-xl-12 col-12 text-center'>
          <h3 className='mb-3'><Link href={'/download-the-app'} className='text-white' style={{ textDecoration: 'none' }}>Get the App</Link></h3>
          <div className='app-icons pt-2'>
            <Link href={'https://play.google.com/store/apps/details?id=com.inc.flexpass'}><Image style={{width:'300px', height:'90px', objectFit:'contain'}} alt='playstore' src={assets.playstore} /></Link>
            <Link href={'https://apps.apple.com/us/app/flex-pass-inc/id6479203678'}><Image style={{width:'300px', height:'90px', objectFit:'contain'}} alt='appstore' src={assets.appstore} /></Link>
          </div>
        </div>
      </div>
      <div className='row align-items-center bg_grey'>
        <div className='col-lg-6 col-xl-6 col-12'>
          <h2 className=''>Fitness Options <br /> <span style={{ color: '#2167b2' }}>Tailored for You</span></h2>
          <p className=''>Experience the epitome of fitness memberships, where the luxury of choice meets ease of use. Delve into a varied assortment of workout possibilities, from high-intensity training to the tranquility of yoga, all within reach. Contact us to get more information.</p>
          <Link className='btn btn-primary' href={'/contact-us'}>Let’s Talk</Link>
        </div>
        <div className='col-lg-6 col-xl-6 col-12'>
          <Image alt='myflexpass' style={{ border: '1px solid #000000', borderRadius: '30px', height: '100%', width: '100%' }} className='img-fluid' src={assets.memberShipbanner03} />
        </div>
      </div>
      <Clients />
    </>
  )
}

export default Membership