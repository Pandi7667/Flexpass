'use client';

import React from 'react'
import Link from 'next/link';

export const metadata = {
  title: "Special Promotions | MyFlexPass",
  description: "Join MyFlexPass today and get 6 free gym classes!",
};
function SpecialPromotions() {
  return (
    <>
      <div className='row'>
        {/* <div className='bg-yellow' style={{ backgroundColor: '#fef87d', padding: '20px 0px' }}>
                  <h4 className='fl-heading mb-0 text-center'>Get One Month Free + Free 30 Credits</h4>
              </div> */}
        <div className='bg-white' style={{ backgroundColor: '#fff', padding: '20px 0px' }}>
          <h1 className='mb-0 text-center h4_title'>ONE MEMBERSHIP. TOTAL FREEDOM.</h1>
        </div>
        <div className='position-relative d-flex justify-content-center align-items-center' style={{ minHeight: '500px', overflow: 'hidden' }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className='position-absolute w-100 h-100'
            style={{
              objectFit: 'cover',
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          >
            {/* <source src={assets.video} type="video/mp4" /> */}
            <source src="https://myflexpass.com/video/new_promotions.mp4" type="video/mp4" />
             Your browser does not support the video tag.
            </video>
          <div className='grid_abs'>
            {/* https://myflexpass.com/wp-content/uploads/2025/05/new_promotions.mp4 */}
            {/* <img alt='' src={assets.flexifitpass5} className='log_img' style={{ backgroundColor: '#000', borderRadius: '10px', marginBottom: '20px' }} /> */}
            {/* <h2>SIGN UP NOW!</h2>
                      <h2>AND GET FREE 30 CREDITS</h2> */}
            <h4 className='mb-4'>FlexPass gives you access to top-rated fitness gyms and wellness studios across the Bay Area-with more locations coming soon!</h4>
            {/* <div><Link href={'/download-the-app'} className='btn btn-primary sixclass offerpromo'>Start your <strong>FREE</strong> trial <br /> <span>Get up to 6 Classes On Us</span></Link></div> */}
            <div><Link href={'/download-the-app'} className='btn-3d-sub'>Start your <strong>FREE</strong> trial <br /> <span>Get up to 6 Classes On Us</span></Link></div>
            <div><Link href={'/about-us'} className='btn btn-primary mb-3 learn_more'>Learn more</Link></div>
            <div><Link href={'/partners'} className='browser' style={{ color: '#000', textTransform: 'capitalize', textDecoration: 'underline' }}>browse our network</Link></div>
            <div><p className='mb-0 mt-3' style={{ fontStyle: 'italic', fontSize: '14px' }}><strong>*Offer Valid For New Members Only</strong></p></div>
            {/* <Link to='https://apps.apple.com/us/app/flex-pass-inc/id6479203678'><img alt='' className='app_img' src={assets.appstore} /></Link>
                      <Link to='https://play.google.com/store/apps/details?id=com.inc.flexpass&hl=en'><img alt='' className='app_img' src={assets.playstore} /></Link> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default SpecialPromotions