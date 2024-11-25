import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/bundle';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PackageTestimonial() {

    return (
        <>

            <section className='home-testimonial' data-scroll-section>
                <div className="container-fluid">
                    <div className="heading-box">
                        <h2>People talk</h2>
                    </div>

                    <div className="content-box">

                        <div className="first-testimonial-box" id='home_testimonial1' data-scroll-speed="-2">

                            <Swiper
                                loop={true}
                                grabCursor={true}
                                pagination={{
                                    clickable: true,
                                }}

                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}

                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 30
                                    },
                                    768: {
                                        slidesPerView: 1,
                                        spaceBetween: 30
                                    },
                                    999: {
                                        slidesPerView: 2,
                                        spaceBetween: 30
                                    },
                                    1024: {
                                        spaceBetween: 50,
                                        slidesPerView: 2,
                                    },


                                    1440: {
                                        spaceBetween: 50,
                                        slidesPerView: 3,
                                    }
                                }}

                            >

                                <SwiperSlide>

                                    <div className="item-box">
                                        <div className="row">
                                            <div className="col-8">
                                                <div className="left">
                                                    <p>Definitely the best desert experience in Dubai. The buggy, the staff, the food, the service, the location are all immaculate. Definitely recommend it !!</p>
                                                </div>


                                            </div>
                                            <div className="col-4">
                                                <div className="right">
                                                    <div className="square">
                                                        <img loading="lazy" src="/images/package/testimonial1.jpg" alt="" />
                                                        <img loading="lazy" className='hover-change' src="/images/package/testimonial1.jpg" alt="" />
                                                    </div>
                                                </div>



                                            </div>

                                            <div className="name-box">
                                                <p>Marin Bernaert </p>
                                            </div>

                                            <div className="rating-box">
                                                <img loading="lazy" className='img-fluid' src="/images/package/5rating.png" alt="" />
                                            </div>

                                        </div>
                                    </div>

                                </SwiperSlide>

                                <SwiperSlide>

                                    <div className="item-box">
                                        <div className="row">
                                            <div className="col-8">
                                                <div className="left">
                                                    <p>One of the besssssst outdoor activities  I have done in my whole life..! Best staff and best experience besst buggies and bessst location..! 😍😍😍 definitely recommend..! …</p>
                                                </div>


                                            </div>
                                            <div className="col-4">
                                                <div className="right">
                                                    <div className="square">
                                                        <img loading="lazy" src="/images/package/testimonial2.jpg" alt="" />
                                                        <img loading="lazy" className='hover-change' src="/images/package/testimonial2.jpg" alt="" />
                                                    </div>
                                                </div>



                                            </div>

                                            <div className="name-box">
                                                <p>Davis Soman </p>
                                            </div>

                                            <div className="rating-box">
                                                <img loading="lazy" className='img-fluid' src="/images/package/4rating.png" alt="" />
                                            </div>

                                        </div>
                                    </div>

                                </SwiperSlide>

                                <SwiperSlide>

                                    <div className="item-box">
                                        <div className="row">
                                            <div className="col-8">
                                                <div className="left">
                                                    <p>We had a great experience today at the zerzura camp. I want to thank all the team, specially Rajesh for making it even more fun! See you soon guys</p>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="right">
                                                    <div className="square">
                                                        <img loading="lazy" src="/images/package/testimonial3.jpg" alt="" />
                                                        <img loading="lazy" className='hover-change' src="/images/package/testimonial3.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="name-box">
                                                <p>Lucas Da Rosa </p>
                                            </div>

                                            <div className="rating-box">
                                                <img loading="lazy" className='img-fluid' src="/images/package/4rating.png" alt="" />
                                            </div>

                                        </div>
                                    </div>

                                </SwiperSlide>

                                <SwiperSlide>

                                    <div className="item-box">
                                        <div className="row">
                                            <div className="col-8">
                                                <div className="left">
                                                    <p>Mega we will definitely be back 🤩 great service. …</p>
                                                </div>


                                            </div>
                                            <div className="col-4">
                                                <div className="right">
                                                    <div className="square">
                                                        <img loading="lazy" src="/images/package/testimonial4.jpg" alt="" />
                                                        <img loading="lazy" className='hover-change' src="/images/package/testimonial4.jpg" alt="" />
                                                    </div>
                                                </div>



                                            </div>

                                            <div className="name-box">
                                                <p>Janine Schuber </p>
                                            </div>

                                            <div className="rating-box">
                                                <img loading="lazy" className='img-fluid' src="/images/package/5rating.png" alt="" />
                                            </div>

                                        </div>
                                    </div>

                                </SwiperSlide>




                            </Swiper>
                        </div>

                        <div className="first-testimonial-box" id='home_testimonial2' data-scroll-speed="-2">

                            <Swiper
                                loop={true}
                                grabCursor={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Autoplay]}


                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 30
                                    },
                                    768: {
                                        slidesPerView: 1,
                                        spaceBetween: 30
                                    },
                                    999: {
                                        slidesPerView: 2,
                                        spaceBetween: 30
                                    },
                                    1024: {
                                        spaceBetween: 50,
                                        slidesPerView: 2,
                                    },


                                    1440: {
                                        spaceBetween: 50,
                                        slidesPerView: 3,
                                    }
                                }}

                            >

                                <SwiperSlide>

                                    <div className="item-box">
                                        <div className="row">
                                            <div className="col-8">
                                                <div className="left">
                                                    <p>Excellent service and experience! We enjoy it!!</p>
                                                </div>


                                            </div>
                                            <div className="col-4">
                                                <div className="right">
                                                    <div className="square">
                                                        <img loading="lazy" src="/images/package/testimonial5.jpg" alt="" />
                                                        <img loading="lazy" className='hover-change' src="/images/package/testimonial5.jpg" alt="" />
                                                    </div>
                                                </div>



                                            </div>

                                            <div className="name-box">
                                                <p>Mario Rodriguez </p>
                                            </div>

                                            <div className="rating-box">
                                                <img loading="lazy" className='img-fluid' src="/images/package/4rating.png" alt="" />
                                            </div>

                                        </div>
                                    </div>

                                </SwiperSlide>

                                <SwiperSlide>

                                    <div className="item-box">
                                        <div className="row">
                                            <div className="col-8">
                                                <div className="left">
                                                    <p>Enjoyed it more than I thought I would originally! Our tour guide Fred was very encouraging and helpful!</p>
                                                </div>


                                            </div>
                                            <div className="col-4">
                                                <div className="right">
                                                    <div className="square">
                                                        <img loading="lazy" src="/images/package/testimonial6.jpg" alt="" />
                                                        <img loading="lazy" className='hover-change' src="/images/package/testimonial6.jpg" alt="" />
                                                    </div>
                                                </div>



                                            </div>

                                            <div className="name-box">
                                                <p>Billy M </p>
                                            </div>

                                            <div className="rating-box">
                                                <img loading="lazy" className='img-fluid' src="/images/package/4rating.png" alt="" />
                                            </div>

                                        </div>
                                    </div>

                                </SwiperSlide>

                                <SwiperSlide>

                                    <div className="item-box">
                                        <div className="row">
                                            <div className="col-8">
                                                <div className="left">
                                                    <p>Full end to end experience was amazing. We had pick up drop off and did the buggying experience. We really liked how sustainable this project is </p>
                                                </div>


                                            </div>
                                            <div className="col-4">
                                                <div className="right">
                                                    <div className="square">
                                                        <img loading="lazy" src="/images/package/testimonial7.jpg" alt="" />
                                                        <img loading="lazy" className='hover-change' src="/images/package/testimonial7.jpg" alt="" />
                                                    </div>
                                                </div>



                                            </div>

                                            <div className="name-box">
                                                <p>Sarim Amair </p>
                                            </div>

                                            <div className="rating-box">
                                                <img loading="lazy" className='img-fluid' src="/images/package/5rating.png" alt="" />
                                            </div>

                                        </div>
                                    </div>

                                </SwiperSlide>

                                <SwiperSlide>

                                    <div className="item-box">
                                        <div className="row">
                                            <div className="col-8">
                                                <div className="left">
                                                    <p>Ben the host made it so fun! I would highly recommend coming during sunset. All the activities are amazing.</p>
                                                </div>


                                            </div>
                                            <div className="col-4">
                                                <div className="right">
                                                    <div className="square">
                                                        <img loading="lazy" src="/images/package/testimonial8.jpg" alt="" />
                                                        <img loading="lazy" className='hover-change' src="/images/package/testimonial8.jpg" alt="" />
                                                    </div>
                                                </div>



                                            </div>

                                            <div className="name-box">
                                                <p>Paloma Monnappa </p>
                                            </div>

                                            <div className="rating-box">
                                                <img loading="lazy" className='img-fluid' src="/images/package/5rating.png" alt="" />
                                            </div>

                                        </div>
                                    </div>

                                </SwiperSlide>
                            </Swiper>
                        </div>


                    </div>
                </div>
            </section>

        </>
    )
}
