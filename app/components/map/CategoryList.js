'use client';

import Slider from 'react-slick';
import Image from 'next/image';

const CategoryList = ({ gyms, onSelectCategory }) => {

  if (!gyms || gyms.length === 0) {
    return (
      <div className="category-list">
        <h4 className='text-center text-uppercase'><strong>No gyms found for the selected region.</strong></h4>
      </div>
    );
  }

  var settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    // cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="category-list">
      {gyms.map((gym) => (
        <div key={gym.id} className="gym-card" onClick={() => {
          //console.log('Selected gym:', gym);
          onSelectCategory(gym);
        }}>
          <div className='d-flex box_map'>
            <div className='img_bx' style={{ position: 'relative' }}>
              {gym.images && gym.images.length > 0 ? (
                <Slider {...settings}>
                  {gym.images && gym.images.map((img, idx) => (
                    <div key={idx}>
                      <Image width={100} height={100} alt={gym.name} src={img.imageurl} />
                    </div>
                  ))}
                </Slider>
              ) : (
                <>
                <Image width={100} height={100} alt={gym.name} src={gym.image} />
                </>
              )}
            </div>
            <div className='addres_bx'>
              <h4>{gym.name}</h4>
              <p>{gym.address}</p>
                {/* <p>{gym.phoneno}</p>
                <p>{gym.category.map((cat, i)=>(
                <span key={i}>{cat.name}</span>
                ))}</p> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
