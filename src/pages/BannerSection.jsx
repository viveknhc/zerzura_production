import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
const BannerSection = () => {
  const [bgImage, setBgImage] = useState('images/package/bg-banner1.jpg'); // Default background image

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex;
    const bgImage = swiper.slides[activeIndex].getAttribute('data-bg');
    setBgImage(bgImage);
  };

  return (
    <section data-scroll-section>
      <div className="Packagebanner" style={{ backgroundImage: `url(${bgImage})` }}>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          loop={true}
          onSlideChange={handleSlideChange}
          pagination={{ clickable: true }}
        >
          <SwiperSlide data-bg="images/package/bg-banner1.jpg">
            <div className="card" style={{ width: '18rem' }}>
              <img loading="lazy" className="card-img-top" src="/images/package/bg-banner1.jpg" alt="Card image cap" />
            </div>
          </SwiperSlide>
          <SwiperSlide data-bg="images/package/bg-banner2.jpg">
            <div className="card" style={{ width: '18rem' }}>
              <img loading="lazy" className="card-img-top" src="/images/package/bg-banner2.jpg" alt="Card image cap" />
            </div>
          </SwiperSlide>
          <SwiperSlide data-bg="images/package/bg-banner3.jpg">
            <div className="card" style={{ width: '18rem' }}>
              <img loading="lazy" className="card-img-top" src="/images/package/bg-banner3.jpg" alt="Card image cap" />
            </div>
          </SwiperSlide>
          {/* Add other SwiperSlide elements here */}
        </Swiper>
      </div>
    </section>
  );
};

export default BannerSection;
