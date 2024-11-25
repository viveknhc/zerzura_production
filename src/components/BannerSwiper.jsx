import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


const sliderData = [
    {
        backgroundImage: 'images/package/bg-banner1.jpg',
        content: <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ea nostrum exercitationem dolor omnis commodi corporis ducimus amet atque facilis tempore eveniet nisi similique sint necessitatibus vel eaque mollitia ipsa!</div>,
    },
    {
        backgroundImage: 'images/package/bg-banner2.jpg',
        content: <div>Content for Slide 2</div>,
    },
    {
        backgroundImage: 'images/package/bg-banner3.jpg',
        content: <div>Content for Slide 3</div>,
    },
    // Add more slides as needed
];

const BannerSwiper = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setActiveSlideIndex(swiper.activeIndex);
    };

    return (
        <div
            className="slider-container"
            style={{
                backgroundImage: `url(${sliderData[activeSlideIndex].backgroundImage})`,
                transition: 'background-image 0.5s ease-in-out',
            }}
        >
            <Swiper
                onSlideChange={handleSlideChange}
                spaceBetween={50}
                slidesPerView={1}
            >
                {sliderData.map((slide, index) => (
                    <SwiperSlide key={index}>
                        {slide.content}
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="content-section">
                {sliderData[activeSlideIndex].content}
            </div>
        </div>
    );
};

export default BannerSwiper;
