

'use client';

import { useEffect, useState, useRef, } from 'react';
import assets from '../components/Assets';
import Image from 'next/image';
import howitworksbanner from '../../public/images/howitworks/banner.webp';
import banner_new from '../../public/images/howitworks/banner_img.webp'
import { useRouter } from 'next/navigation';

function HowItWorks() {

  const timelineSteps = [
    { title: "DOWNLOAD THE APP & SIGN UP", description: "Download the FlexPass App" },
    { title: "CHOOSE YOUR PLAN", description: "Choose a membership plan that suits your needs, or pay as you go" },
    { title: "EXPLORE ACTIVITIES", description: "Search for workouts or activities and the location" },
    { title: "BOOK", description: "Book a class or activity and sign the waiver" },
    { title: "CHECK IN", description: "Check in through the app before your class and you're in!" },
  ];

  const [progressHeight, setProgressHeight] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const timelineEl = document.querySelector('.timeline');
      const timelineTop = timelineEl?.getBoundingClientRect().top + window.scrollY;
      const timelineHeight = timelineEl?.offsetHeight;
      const scrollY = window.scrollY + window.innerHeight / 2;
      const progress = Math.min(scrollY - timelineTop, timelineHeight);
      setProgressHeight(progress > 0 ? progress : 0);
    };

    window.addEventListener('scroll', updateProgress);
    window.addEventListener('resize', updateProgress);
    updateProgress();

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  const itemRefs = useRef([]);
 // const navigate = useNavigate();
const router = useRouter();
  const DownApp = () => {
    router.push('/download-the-app');
  };

//  const router_membership = useRouter();
  const Membership = () => {
    router.push('/membership/#Membership');
  };

  return (
    <>
    <div className='row ptop_bottom ptop_innerpage_bottom' style={{ backgroundImage: `url(${howitworksbanner.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundAttachment: 'scroll', backgroundSize: 'cover' }}>
        <div className='col-lg-12 col-sm-12 col-12'>
          <h1 className='text-center text-white'>
            <Image alt='flexpass' src={assets.FPFlexPassOnly} className='img-fluid' style={{ width: '244px', borderRadius: '10px', marginBottom: '20px' }} />
          </h1>
          <p className='text-center text-white'>ONE MEMBERSHIP | MULTIPLE GYM ACCESS</p>
          <h4 className='text-center text-white'>HOW IT WORKS</h4>
          <div className="timeline">
            <div className="timeline-progress" style={{ height: `${progressHeight}px` }}></div>
            {timelineSteps.map((step, index) => (
              <div
                key={index}
                ref={el => (itemRefs.current[index] = el)}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="content-bx">
                  {step.title === "DOWNLOAD THE APP & SIGN UP" || step.title === "CHOOSE YOUR PLAN" ? (
                    <h3
                     // onClick={DownApp} 
                      onClick={() => {
                        if (step.title === "DOWNLOAD THE APP & SIGN UP") {
                          DownApp();
                        } else if (step.title === "CHOOSE YOUR PLAN") {
                          Membership();
                        }
                      }}
                      style={{ cursor: 'pointer', color: '#007bff', textDecoration: 'underline' }}
                    >
                      {step.title}
                    </h3>
                  ) : (
                    <h3>{step.title}</h3>
                  )}
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* <div className='text-center pt-5'>
            <Image alt='qr' style={{ width: '280px', height:'280px' }} src={qrScan} />
          </div> */}
        </div>
      </div>
      <div className='row flexhowitworks' style={{ backgroundImage: `url(${banner_new.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center top', backgroundAttachment: 'fixed', backgroundSize: 'cover', minHeight: '500px', padding: '50px 0px' }}>
        <div className='col-lg-10 col-xl-10 col-sm-12 col-12 mx-auto'>
          <div className='card_bx'>
            <h4>Why You`ll Love Flex Pass</h4>
            <ul className="">
              <li className="">
                Discover new classes with a user-friendly platform
              </li>
              <li className="">
                Access a diverse range of fitness classes and gyms
              </li>
              <li className="">
                Enjoy the freedom to try different studios without commitment
              </li>
              <li className="">
                Benefit from affordable memberships and customizable costs
              </li>
              <li className="">
                Pay only for what you use and keep unused credits
              </li>
              <li className="">
                Experience no contracts, hidden fees, or hassle
              </li>
              <li className="">
                Get excellent customer service, with the option to freeze your membership for up to two months each year
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default HowItWorks