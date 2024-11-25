// Banner.js
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/bundle';

const PackageBanner = ({ setActiveSlide }) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        const newIndex = swiper.activeIndex;
        setActiveSlideIndex(newIndex);
        setActiveSlide(newIndex); // Notify parent component
    };

    const bannerBackgrounds = [
        'url(images/package/bg-banner1.jpg)',
        'url(images/package/bg-banner2.jpg)',
        'url(images/package/bg-banner3.jpg)', 
    ];

    return (


        


        <div
            className="banner"
            style={{ backgroundImage: bannerBackgrounds[activeSlideIndex] }}
        >
            <Swiper onSlideChange={handleSlideChange}

                loop={true}
                grabCursor={true}
                mousewheel={true}
                centeredSlides={true}
                // freeMode={true}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                modules={[Autoplay]}
                className="firstTestimonial"

            >
                <SwiperSlide>Slide 1 Content</SwiperSlide>
                <SwiperSlide>Slide 2 Content</SwiperSlide>
                <SwiperSlide>Slide 3 Content</SwiperSlide>
                {/* Add more slides as needed */}
            </Swiper>
        </div>
    );
};

export default PackageBanner;
