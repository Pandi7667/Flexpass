'use client';

import React from 'react'
import assets from '../components/Assets';
import Clients from '../components/clients/Clients';
import Link from 'next/link';
import Image from 'next/image';
function Membership() {
  return (
    <>
      <div className='row ptop_bottom ptop_innerpage_bottom pb-0'>
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

      <div className='bg_dark_member align-items-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-xl-6 col-12 d-flex flex-column justify-content-center align-items-start'>
              <h2 className='text-white'>Access Multiple<br />
                Fitness Studios With One <br /> Affordable Membership</h2>
              <p className='text-white'>FLEXPASS offers access to a variety of fitness classes across multiple gyms with a single, low-cost membership. Customize your costs, freeze your membership, and use your credits anytime. Enjoy easy booking, cancellation, and top-notch customer service. Download FLEXPASS today and start your free trial!</p>
              <Link className='btn btn-primary' href={'/download-the-app'}>Download the App</Link>
            </div>
            <div className='col-lg-6 col-xl-6 col-12'>
              <Image alt='myflexpass' style={{ border: '1px solid #000000', borderRadius: '30px', height: '100%', width: '100%' }} className='img-fluid' src={assets.memberShipbanner01} />
            </div>
          </div>
        </div>
      </div>
      <div className='align-items-center bg_white'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-xl-6 col-12'>
              <Image alt='myflexpass' style={{ border: '1px solid #000000', borderRadius: '30px', height: '100%', width: '100%' }} className='img-fluid' src={assets.memberShipbanner02} />
            </div>
            <div className='col-lg-6 col-xl-6 col-12 d-flex flex-column justify-content-center align-items-start'>
              <h2 className=''>Get Fit and <span style={{ color: '#2167b2' }}>Have Fun</span></h2>
              <p className=''>Discover the perfect fitness routine with FLEXPASS, the ultimate app for accessing top gyms and studios. Easily browse classes, choose between monthly credits or pay-as-you-go, and explore a variety of workouts. FLEXPASS offers flexibility and convenience, breaking free from traditional memberships.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='row align-items-center bg_blue'>
        <div className='col-lg-12 col-xl-12 col-12 text-center'>
          <h3 className='mb-3'><Link href={'/download-the-app'} className='text-white' style={{ textDecoration: 'none' }}>Get the App</Link></h3>
          <div className='app-icons pt-2'>
            <Link href={'https://play.google.com/store/apps/details?id=com.inc.flexpass'}><Image style={{ width: '300px', height: '90px', objectFit: 'contain' }} alt='playstore' src={assets.playstore} /></Link>
            <Link href={'https://apps.apple.com/us/app/flex-pass-inc/id6479203678'}><Image style={{ width: '300px', height: '90px', objectFit: 'contain' }} alt='appstore' src={assets.appstore} /></Link>
          </div>
        </div>
      </div>
      <div className='align-items-center bg_grey'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-xl-6 col-12 d-flex flex-column justify-content-center align-items-start'>
              <h2 className=''>Fitness Options <br /> <span style={{ color: '#2167b2' }}>Tailored for You</span></h2>
              <p className=''>Experience the epitome of fitness memberships, where the luxury of choice meets ease of use. Delve into a varied assortment of workout possibilities, from high-intensity training to the tranquility of yoga, all within reach. Contact us to get more information.</p>
              <Link className='btn btn-primary' href={'/contact-us'}>Let’s Talk</Link>
            </div>
            <div className='col-lg-6 col-xl-6 col-12'>
              <Image alt='myflexpass' style={{ border: '1px solid #000000', borderRadius: '30px', height: '100%', width: '100%' }} className='img-fluid' src={assets.memberShipbanner03} />
            </div>
          </div>
        </div>
      </div>
      <div className='align-items-center bg_white pricing section' id="Membership">
        <div className='container'>
          <div className="row justify-content-center g-4">
            <div className='col-lg-12'>
              <h2 className='mb-4'>Membership Plan<span style={{ color: '#2167b2' }}> Pricing</span></h2>
              <p><strong>JOIN NOW</strong> – Get 1 month FREE + 30 FREE credits, offer valid for new members only!</p>
            </div>
            <div className="col-lg-4 col-md-6">
            <div className="pricing-card enterprise">
              <div className="plan-header">
                <h3 className="plan-name">Flex Plan</h3>
                <p className="plan-description">pay $1 per booking + class credits per booking (credits never expire)</p>
              </div>
              <div className="pricing-display">
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">0</span>
                  <span className="period">/month</span>
                </div>
              </div>
              {/* <div className="features-list">
                <div className="feature">
                  <i className="bi bi-check2"></i>
                  <span>Features</span>
                </div>
              </div> */}
              <Link href={'https://app.myflexpass.com/auth/registration'} className="btn-plan">Get Started</Link>
              {/* <a href="https://app.myflexpass.com/auth/registration" className="btn-plan">Get Started</a> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="pricing-card starter">
              <div className="plan-header">
                <h3 className="plan-name">Flex N Go</h3>
                <p className="plan-description">for unlimited bookings + class credits per booking (credits never expire)</p>
              </div>
              <div className="pricing-display">
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">10</span>
                  <span className="period">/month</span>
                </div>
              </div>
              {/* <div className="features-list">
                <div className="feature">
                  <i className="bi bi-check2"></i>
                  <span>Features</span>
                </div>
              </div> */}
              <Link href={'https://app.myflexpass.com/auth/registration'} className="btn-plan">Get Started</Link>
              {/* <a href="https://app.myflexpass.com/auth/registration" className="btn-plan">Get Started</a> */}
            </div>
          </div>
          {/* <div className="col-lg-4 col-md-6">
            <div className="pricing-card professional featured">
              <div className="plan-header">
                <div className="featured-badge">Most Popular</div>
                <h3 className="plan-name">JOIN NOW</h3>
                <p className="plan-description">Get 1 month FREE + 30 FREE credits, offer valid for new members only!</p>
              </div>
              <div className="pricing-display">
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">0</span>
                  <span className="period">/month</span>
                </div>
              </div>
              <div className="features-list">
                <div className="feature">
                  <i className="bi bi-check2"></i>
                  <span>Features</span>
                </div>
              </div>
              <a href="#" className="btn-plan">Start Free Trial</a>
            </div>
          </div> */}
          
        </div>
          {/* <div className='row'>
            <div className='col-lg-12'>
               <h2 className='mb-5'>Choose Your <span style={{ color: '#2167b2' }}>Plan</span></h2>
            </div>
            <div className='col-lg-4 col-sm-12 mb-4'>
              <div className="card shadow-sm h-100 rounded-4">
                <div className="card-body">
                  <h3>Flex N Go</h3>
                  <h5 className="mb-0">
                     $10/month for unlimited bookings + class credits per booking (credits never expire)
                  </h5>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-sm-12 mb-4'>
              <div className="card shadow-sm h-100 rounded-4">
                <div className="card-body">
                  <h3>Flex Plan</h3>
                  <h5 className="mb-0">
                     $0/month, pay $1 per booking + class credits per booking (credits never expire)
                  </h5>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-sm-12 mb-4'>
              <div className="card shadow-sm h-100 rounded-4">
                <div className="card-body">
                  <h3>JOIN NOW</h3>
                  <h5 className="mb-0">
                    Get 1 month FREE + 30 FREE credits, offer valid for new members only!
                  </h5>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className='col-lg-12 pt-lg-4 pt-sm-43 pt-3 pb-3 p-5'>
        <h1>Choose Your Plan</h1>
        <div className="card_ mt-4 mb-4">
          <div className="card-body text-left">

          </div>
        </div>
      </div> */}
      <Clients />
    </>
  )
}

export default Membership