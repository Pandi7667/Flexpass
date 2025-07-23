'use client';

import React from 'react'
import assets from '../components/Assets';
import Image from 'next/image';
import aboutBanner from '../../public/images/about/fmf_8736-scaled.webp';
import aboutBanner02 from '../../public/images/about/yoga.webp';
function AboutUs() {
  return (
    <>
          <div className='row ptop_bottom about_flex'>
              <div className='col-lg-6 col-sm-6 col-12' data-aos="fade-up" data-aos-duration="3000">
                  <h4>About FLEXPASS                      </h4>
                  <p>At FLEXPASS, we bring you budget-friendly memberships to premier establishments across California – all in one app and one membership. With a focus on flexibility, you can customize your monthly costs, pay as you go, and freeze your membership for up to two months each year. Plus, you get great customer service, flexible class scheduling, and a simple cancellation process.</p>
                  <p>FLEXPASS is more than just an app. It’s a lifestyle. It’s a community. It’s a way to discover new passions and achieve your fitness and wellness goals. Join FLEXPASS today and start your journey to a happier and healthier you!</p>
              </div>
              <div className='col-lg-6 col-sm-6 col-12' data-aos="fade-up" data-aos-duration="3000">
                  <Image alt='About FLEXPASS ' src={assets.aboutBanner01} className='img-fluid banner_bx' />
              </div>
          </div>
          <div className='row ptop_bottom flex_founded ' style={{ backgroundImage: `url(${aboutBanner.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundAttachment: 'scroll', backgroundSize: 'cover' }}>
              <div className='col-lg-6 col-sm-6 col-12'>
              </div>
              <div className='col-lg-6 col-sm-6 col-12'>
                  <div className='grid_bx_content' data-aos="fade-up" data-aos-duration="3000">
                      <h4>Founded by a Fellow</h4>
                      <h4><span>Fitness Enthusiast</span> </h4>
                      <p>Tony Gabucan is more than just a boxing coach and a passionate fitness enthusiast. He is also a visionary entrepreneur and a compassionate mentor who has empowered many people to pursue their health and wellness goals. With over a decade of experience as the owner of multiple gyms, a dance studio, and several lucrative business ventures in the Bay Area, he has mastered the art of creating a fun, flexible, and effective training environment for his clients. He is also a savvy sales and marketing expert who knows how to attract and satisfy customers with his innovative strategies and personalized services. He always provides value and quality to his audience while rising to any challenge.</p>
                      <p className='bold'>Join us today and start experiencing the fitness and wellness revolution!</p>
                  </div>
              </div>
          </div>
          <div className='row flexMakes' style={{ backgroundImage: `url(${aboutBanner02.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center top', backgroundAttachment: 'fixed', backgroundSize: 'cover', minHeight: '500px', padding: '50px 0px' }}>
              <div className='col-lg-12 col-sm-12 col-12 text-center'>
                  <h4>What Makes<br /> FLEXPASS Different?</h4>
              </div>
              <div className='col-lg-6 col-sm-6 col-12'>
                  <h4>About FLEXPASS                      </h4>
                  <p> <i className='fas fa-check-circle'></i> One Membership, Unlimited Access: Enjoy the convenience and flexibility of visiting any gym you want with just one app and one membership.
                  </p>
                  <p> <i className='fas fa-check-circle'></i> Discover Your Passion: Explore a wide variety of fitness and wellness establishments, from yoga studios to martial arts gyms, and find what suits you best.
                  </p>
                  <p> <i className='fas fa-check-circle'></i> No Wasted Credits: Your unused credits will never expire, so you can use them whenever you want.
                  </p>
              </div>
              <div className='col-lg-6 col-sm-6 col-12'>
                  <p> <i className='fas fa-check-circle'></i> No Strings Attached: You don’t have to sign any contract or commit to any long-term plan. You can cancel your membership anytime with no hassle.
                  </p>
                  <p> <i className='fas fa-check-circle'></i> Freeze When You Need: You can freeze your account for up to two months each year, whether you’re traveling, busy, or just need a break.
                  </p>
                  <p> <i className='fas fa-check-circle'></i> Save Money, Stay Healthy: We are committed to providing you with a cost-effective solution for your fitness and wellness needs. You can enjoy an affordable monthly rate, change your minimum monthly credits as you wish, and pay as you go for any extra credit(s) with no minimum.
                  </p>
              </div>
          </div>
    </>
  )
}

export default AboutUs