'use client';

import assets from '../components/Assets'
import Image from 'next/image';
import Link from 'next/link';
import becomeBanner from '../../public/images/download_app.jpg'
function DownloadApp() {
  return (
    <>
      <div className='row'>
            <div className='bg-white' style={{ backgroundColor: '#fff', padding: '20px 0px' }}>
                <h1 className='mb-0 text-center h4_title'>ONE MEMBERSHIP. TOTAL FREEDOM. </h1>
            </div>
            <div className='banner_img position-relative' style={{ backgroundImage: `url(${becomeBanner.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center top', backgroundSize: 'cover', minHeight: '500px', padding: '50px 0px' }}>
                <div className='grid_abs download_app'>
                    <div className='grid_child_app'>
                        <div className="d-flex justify-content-between align-items-center w-100 gap-3">
                            {/* <div>
                                <img alt='flexpass' className='logo_down' src={assets.logo} />
                            </div> */}
                                <Link href='https://apps.apple.com/us/app/flex-pass-inc/id6479203678' target='_blank'><Image alt='' width={230} height={65} style={{objectFit:'contain'}} className='app_img' src={assets.appstore} /></Link>
                                <Link href='https://play.google.com/store/apps/details?id=com.inc.flexpass&hl=en' target='_blank'><Image alt='' width={230} height={65} style={{objectFit:'contain'}} className='app_img' src={assets.playstore} /></Link>
                            {/* <div>
                                <Link href='https://apps.apple.com/us/app/flex-pass-inc/id6479203678' target='_blank'><Image alt='' width={220} height={60} className='app_img' src={assets.appstore} /></Link>
                                <Link href='https://play.google.com/store/apps/details?id=com.inc.flexpass&hl=en' target='_blank'><Image alt='' width={220} height={60} className='app_img' src={assets.playstore} /></Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DownloadApp