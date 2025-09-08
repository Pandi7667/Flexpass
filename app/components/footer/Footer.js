'use client';
import React from 'react'
import assets from '../../components/Assets'
//import { Link, useLocation, useNavigate } from 'react-router-dom'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLoading } from '../../context/LoadingContext';
import { useRouter } from 'next/navigation';

function Footer() {
        const location = usePathname();
        const router = useRouter();
        const { setLoading } = useLoading();
        const handleNavClick = (href) => (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
        router.push(href);
        }, 500);
        };
  //  const navigate = useNavigate();
    const DownApp = () => {
       // navigate('/special-promotions')
    }
    return (
        <div className='row'>
            <div className='col-lg-12'>
                <div className='footer_grid'>
                    <div className="footer">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-5 col-sm-4 col-xs-12">
                                    <div className="single_footer">
                                        <div className='row align-items-center'>
                                            <div className='col-lg-4 col-xl-4 col-12'>
                                                <Image alt='FLEXPASS' src={assets.logo} />
                                            </div>
                                            <div className='col-lg-8 col-xl-8 col-12'>
                                                <p>FLEXPASS enhances your lifestyle with flexible and convenient fitness solutions. Enjoy access to multiple gyms with one app and one membership.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-7 col-xl-7 col-sm-8 col-12' >
                                    <div className='row'>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="single_footer single_footer_address">
                                                <div className='row'>
                                                    <div className='col-lg-12'>
                                                        <div className='mobile_view mt_'>
                                                            <div>
                                                                <h4>Business Hours</h4>
                                                            </div>
                                                            <div>
                                                                <p><i className="fas fa-clock" aria-hidden="true"></i> Open 24/7</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-12'>
                                                        <div className='mobile_view'>
                                                            <div>
                                                                <h4>Contact Info </h4>
                                                            </div>
                                                            <div>
                                                                <p><i className="fas fa-phone" aria-hidden="true"></i> (408) 896-5421</p>
                                                                <p><i className="fas fa-envelope" aria-hidden="true"></i> info@myflexpass.com</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12" >
                                            <div className="single_footer single_footer_address">
                                                <div className='mobile_view'>
                                                    <div> <h4 onClick={DownApp}>Download App</h4></div>
                                                    <div>
                                                        <div className='d-flex gap-2 mb-3'>
                                                            <div className='appimg'>
                                                                <a target="_blank" href="https://apps.apple.com/us/app/flex-pass-inc/id6479203678">
                                                                    <Image decoding="async" src={assets.app_store} alt="App Store" width="500" height="600" className="no-lazyload" />
                                                                </a>
                                                            </div>
                                                            <div className='appimg'>
                                                                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.inc.flexpass&amp;hl=en">
                                                                    <Image decoding="async" src={assets.play_store} alt="play store" width="500" height="600" className="no-lazyload" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mobile_view'>
                                                    <div><h4>Follow Us</h4></div>
                                                    <div>
                                                        <div className="social_profile">
                                                            <ul>
                                                                <li><Link href="https://www.facebook.com/myflexpass/" target='_blank'><i className="fab fa-facebook-f"></i></Link></li>
                                                                <li><Link href="https://www.instagram.com/flexpass_/" target='_blank'><i className="fab fa-instagram"></i></Link></li>
                                                                <li><Link href="https://youtube.com/@flexpass_?si=RMpQeNrlRc3lbxMy" target='_blank'><i className="fab fa-youtube"></i></Link></li>
                                                                <li><Link href="https://www.tiktok.com/@flexpass_" target='_blank'><i className="fab fa-tiktok"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rowrow text-center mb-3 mt-3">
                                <div className="col-lg-12 col-sm-12 col-xs-12">
                                    <ul className='align-middle'>
                                        <li className={`${location === '/home/' ? 'active' : ''}`}><Link href="/home/" onClick={handleNavClick('/home/')}>Home</Link></li>
                                        <li className={`${location === '/about-us/' ? 'active' : ''}`}><Link href="/about-us/" onClick={handleNavClick('/about-us/')}>About Us</Link></li>
                                        <li className={`${location === '/how-it-works/' ? 'active' : ''}`}><Link href="/how-it-works/" onClick={handleNavClick('/how-it-works/')}>How It Works</Link></li>
                                        <li className={`${location === '/membership/' ? 'active' : ''}`}><Link href="/membership/" onClick={handleNavClick('/membership/')}>Membership</Link></li>
                                        <li className={`${location === '/partners/' ? 'active' : ''}`}><Link href="/partners/" onClick={handleNavClick('/partners/')}>Partners</Link></li>
                                        <li className={`${location === '/become-a-partner/' ? 'active' : ''}`}><Link href="/become-a-partner/" onClick={handleNavClick('/become-a-partner/')}>Become a Partner</Link></li>
                                        <li className={`${location === '/all-gyms/' ? 'active' : ''}`}><Link onClick={(e) => {
                                            sessionStorage.removeItem('selected_gym_id');
                                            handleNavClick('/all-gyms/')(e); 
                                        }} href="/all-gyms/" >All Gyms</Link></li>
                                        <li className={`${location === '/contact-us/' ? 'active' : ''}`}><Link href="/contact-us/" onClick={handleNavClick('/contact-us/')}>Contact Us</Link></li>
                                        <li className={`${location === '/faq/' ? 'active' : ''}`}><Link href="/faq/" onClick={handleNavClick('/faq/')}>FAQ`s</Link></li>
                                        <li className={`${location === '/privacy-policy/' ? 'active' : ''}`}><Link href="/privacy-policy/" onClick={handleNavClick('/privacy-policy/')}>Privacy Policy</Link></li>
                                        <li className={`${location === '/terms-and-conditions/' ? 'active' : ''}`}><Link href="/terms-and-conditions/" onClick={handleNavClick('/terms-and-conditions/')}>Terms & Conditions</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row bg-gray">
                                <div className="col-lg-12 col-sm-12 col-xs-12">
                                    <p className="copyright">© 2025, All Rights Reserved <Link href="/home/" onClick={handleNavClick('/home/')}>FLEXPASS</Link>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer