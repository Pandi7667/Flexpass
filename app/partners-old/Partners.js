'use client';

import MapComponent from '../components/map/MapComponent'

function Partners() {
  return (
    <>
      <div className='row bg_dark_black'>
        <div className='col-lg-8 colxl-8 col-12 col-sm-12 mx-auto'>
          <h3 className='text-white text-center'>Our Valuable Partners <br />Gym Partners  </h3>
          <p className='text-white text-center'>Did you know that as a Flex Pass member, you have access to a wide variety of participating gym locations? Whether you`re traveling for work or leisure or just need to mix up your routine, you can find a gym or fitness class to fit your needs and keep up with your fitness routine.</p>
          <p className='text-white text-center'>To make things even more convenient, explore this list of participating gym locations. Simply choose the area that works best for you and start your workout!</p>
        </div>
      </div>
      <div className='row'>
        <MapComponent />
      </div>
    </>
  )
}

export default Partners