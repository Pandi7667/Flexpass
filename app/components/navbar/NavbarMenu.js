'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import assets from '../Assets'
import LoginModal from '../modal/LoginModal'
import axios from 'axios';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { useLoading } from '../../context/LoadingContext';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavbarMenu() {
  const pathname = usePathname();
  const router = useRouter();
  const { setLoading } = useLoading();
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

//   const handleNavClick = (href) => (e) => {
//   e.preventDefault();
//   setLoading(true);
//   router.push(href);
// };

  const [isMobile, setIsMobile] = useState(false);
  //const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [data, setData] = useState({ email: '', password: '', role: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth < 768);
  const handleScroll = () => setScrolled(window.scrollY > 60);

  handleResize();

  window.addEventListener('resize', handleResize);
  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  //const handleToggleClick = () => setIsMobileNavVisible(!isMobileNavVisible);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

   const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));

    if (error) {
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, role } = data;

    // Basic validation
    if (!email || !password || !role) {
      setError("Please fill in all fields.");
      return;
    }
//NEXT_API_URL
    let apiUrl = '';
    switch (role) {
      case 'Admin':
        apiUrl = 'https://api.myflexpass.com/admin/login';
        break;
      case 'AccountManager':
        apiUrl = 'https://api.myflexpass.com/account-manager/login';
        break;
      case 'Partner':
        apiUrl = 'https://api.myflexpass.com/partner/partner-login';
        break;
      case 'Member':
        apiUrl = 'https://api.myflexpass.com/memberWeb/login';
        break;
      default:
        setError("Invalid role selected.");
        return;
    }

    try {

      Cookies.remove('_scc_session');
      Cookies.remove('_tccl_visit');
      Cookies.remove('_tccl_visitor');
      
      const response = await axios.post(apiUrl, data);
    
      const result = response.data;
      //console.log('result',result)
    
      if (result.data) {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
    
        // const token = encodeURIComponent(result.accessToken);
        // const userData = encodeURIComponent(JSON.stringify(result.data));
    
        // window.open(
        //   `https://app.myflexpass.com/auth/login?accessToken=${token}&data=${userData}`,
        //   '_blank'
        // );
       window.open(`https://app.myflexpass.com/auth/login?accessToken=${encodeURIComponent(result.accessToken)}?${encodeURIComponent(JSON.stringify(result.data))}`,"_blank");

      } else {
        setError(result.message || 'Login failed');
      }
    
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Error connecting to server");
    }
  };

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleNavClick = (href) => (e) => {
  e.preventDefault();
  setLoading(true); 
  setTimeout(() => {
    router.push(href); // Navigate after 500ms
  }, 500); // 500 milliseconds = 0.5 seconds
};

 // const normalizedPath = pathname?.replace(/\/+$/, '');
//const normalizedPath = pathname?.replace(/\/+$/, '') || '';
    const normalizedPath = pathname?.replace(/\/$/, '') || '';


  const staticAboutPaths = [
    '/about-us/',
    '/how-it-works/',
    '/all-gyms/',
    '/privacy-policy/',
    '/contact-us/',
    '/membership/',
    '/partners/',
    '/pagenot',
    //'/download-the-app',
    '/terms-and-conditions/',
    '/special-promotions/',
    
  ];

  const isHomePage = pathname === '/home/';
  const isBecomeaPartner = normalizedPath === '/become-a-partner';

  // const isSlugPage =
  //   /^\/[^/]+$/.test(pathname || '') &&
  //   !staticAboutPaths.includes(pathname || '') &&
  //   !isHomePage &&
  //   !isBecomeaPartner;

  const isSlugPage =
  /^\/[^/]+$/.test(normalizedPath) &&
  !staticAboutPaths.includes(normalizedPath) &&
  !isHomePage &&
  !isBecomeaPartner;

  //const isAboutPage = staticAboutPaths.includes(pathname || '') || isSlugPage;

  const isAboutPage =
  staticAboutPaths.includes(normalizedPath) || isSlugPage;

  const handleDropdownClick = () => {
    if (isMobile) setIsDropdownOpen(prev => !prev);
  };

  const handleMouseEnter = () => {
    if (!isMobile) setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setIsDropdownOpen(false);
  };

  return (
    <>
      <nav className={`navbar navbar-expand-md navbar-dark bg-dark bsb-navbar-hover bsb-navbar-caret 
        ${isHomePage || isBecomeaPartner ? 'fixed-top' : ''}
        ${scrolled ? 'navbar-scrolled fixed-top' : ''} 
        ${isAboutPage ? 'navbar_inner' : ''}`} >
        <div className="container-fluid">
          <Link className="navbar-brand" href="/home" onClick={handleNavClick('/home')}>
            <Image width={100} height={73} style={{objectFit:'contain'}} src={assets.logo} alt="Logo" className="logo" />
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <i className="fas fa-bars bi bi-list"></i>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg> */}
          </button>
          <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <Image style={{objectFit:'contain'}} src={assets.logo} alt="Logo" className="logo" />
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1">
                <li className="nav-item"><Link className={`nav-link ${normalizedPath === '/home' ? 'active' : ''}`} href="/home" onClick={handleNavClick('/home')} data-bs-dismiss="offcanvas" aria-label="Close">Home</Link></li>
                <li className="nav-item"><Link className={`nav-link ${normalizedPath === '/about-us' ? 'active' : ''}`} href="/about-us" onClick={handleNavClick('/about-us')} data-bs-dismiss="offcanvas" aria-label="Close">About Us</Link></li>
                <li className="nav-item"><Link className={`nav-link ${normalizedPath === '/how-it-works' ? 'active' : ''}`} href="/how-it-works" onClick={handleNavClick('/how-it-works')} data-bs-dismiss="offcanvas" aria-label="Close">How It Works</Link></li>
                <li className="nav-item"><Link className={`nav-link ${normalizedPath === '/membership' ? 'active' : ''}`} href="/membership" onClick={handleNavClick('/membership')} data-bs-dismiss="offcanvas" aria-label="Close">Membership</Link></li>
                <li className="nav-item dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <span
                    className={`nav-link dropdown-toggle ${['/become-a-partner', '/partners'].includes(normalizedPath) ? 'active' : ''}`}
                    id="dropdown01"
                    onClick={handleDropdownClick}
                    style={{ cursor: 'pointer' }}
                  >
                    Partners
                  </span>
                  {isDropdownOpen && (
                    <div className="dropdown-menu show" aria-labelledby="dropdown01">
                      <Link className={`dropdown-item ${normalizedPath === '/become-a-partner' ? 'active' : ''}`} href="/become-a-partner" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleNavClick('/become-a-partner')}>Become a Partner</Link>
                      <Link className={`dropdown-item ${normalizedPath === '/partners' ? 'active' : ''}`} href="/partners" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleNavClick('/partners')}>Partners</Link>
                    </div>
                  )}
                </li>
                <li className="nav-item"><Link className={`nav-link ${normalizedPath === '/contact-us' ? 'active' : ''}`} href="/contact-us" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleNavClick('/contact-us')}>Contact Us</Link></li>
                <li className="nav-item"><Link className="nav-link btn btn-primary mt-0 text-capitalize" href="/special-promotions" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleNavClick('/download-the-app')}>Download App</Link></li>
                <li className="nav-item"><button className="nav-link btn btn-primary mt-0 text-capitalize" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleOpenModal}>Login</button></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <LoginModal
        data={data}
        setData={setData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        show={showModal}
        onClose={handleCloseModal}
        error={error}
        setError={setError}
        togglePasswordVisibility={togglePasswordVisibility}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
    </>
  );
}
