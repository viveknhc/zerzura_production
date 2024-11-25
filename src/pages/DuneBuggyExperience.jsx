import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import PackageTestimonial from '../components/PackageTestimonial';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const DuneBuggyExperience = () => {


    // 4-Seater-Mleiha-Dune-Buggy-Safari-With-Transfer

    // GSAP FOR TESTIMONIAL




    // MAIN DATA CHANGING SECTION 
    // banner
    const [bgImage, setBgImage] = useState('images/package/dune/2seater-with-transfer-bg.jpg');
    const [packageBanner, setpackageBanner] = useState('2 Seater Mleiha Dune Buggy Safari With Transfer');
    const [changingImg, setChangingImg] = useState('images/package/intro1.jpg');
    const [bannerDesc, setbannerDesc] = useState('Experience The Thrill Of A Lifetime On A Dune Buggy Desert Adventure Tour! Race Through The Sand Dunes, Explore Hidden Wadis, And Enjoy Stunning Views Of The Arabian Desert.');
    const [offerItem1, setofferItem1] = useState('4 Hours');
    const [offerItem2, setofferItem2] = useState('Pickup & Drop-off');
    const [offerItem3, setofferItem3] = useState('Mleiha Desert');
    const [offerItem4, setofferItem4] = useState('2 persons');
    const [price, setprice] = useState('AED 1500 ($409) per buggy');

    // overview
    const [tourOverView, settourOverView] = useState('Dive into the thrilling landscapes of the Mleiha Desert with our dune buggy safari adventure. Designed for your convenience, our package includes pick-up and drop-off services directly from your hotel, ensuring a smooth and hassle-free experience. Get ready to drive your own dune buggy on an adrenaline-pumping, hour-long ride across the stunning desert terrain. Along the way, capture unforgettable moments with the breathtaking views of Fossil Rock and Camel Rock.Post-ride, relax and recharge with provided refreshments and snacks, utilizing our comfortable changing room facilities. Next, equip yourself with safety gear and conquer the dunes with exhilarating sandboarding. Continue your desert journey with an authentic camel ride, followed by a guided nature walk to explore the diverse flora and fauna unique to this region.This all-inclusive package promises an unforgettable adventure, perfect for both thrill-seekers and nature lovers.');

    // Package Include
    const [IncludeTitle1, setIncludeTitle1] = useState('Pick-up and Drop-off');
    const [IncludeImg1, setIncludeImg1] = useState('images/package/dune/include1.jpg');

    const [IncludeTitle2, setIncludeTitle2] = useState('Self-drive Dune Buggy Ride');
    const [IncludeImg2, setIncludeImg2] = useState('images/package/dune/include2.jpg');

    const [IncludeTitle3, setIncludeTitle3] = useState('Fossil Discovery at Fossil Rock');
    const [IncludeImg3, setIncludeImg3] = useState('images/package/dune/include3.jpg');

    const [IncludeTitle4, setIncludeTitle4] = useState('Refreshments & Snacks');
    const [IncludeImg4, setIncludeImg4] = useState('images/package/dune/include3.jpg');

    const [IncludeTitle5, setIncludeTitle5] = useState('Sandboarding & Camel Ride');
    const [IncludeImg5, setIncludeImg5] = useState('images/package/dune/include4.jpg');


    const handleSlideChange = (swiper) => {

        const activeIndex = swiper.activeIndex;
        const activeSlide = swiper.slides[activeIndex];



        // Update background image, text, and image based on the active slide
        // banner
        setBgImage(activeSlide.getAttribute('data-bg'));
        setpackageBanner(activeSlide.getAttribute('data-text'));
        setChangingImg(activeSlide.getAttribute('data-img'));
        setbannerDesc(activeSlide.getAttribute('bannerDesc'));
        setofferItem1(activeSlide.getAttribute('offerItem1'));
        setofferItem2(activeSlide.getAttribute('offerItem2'));
        setofferItem3(activeSlide.getAttribute('offerItem3'));
        setofferItem4(activeSlide.getAttribute('offerItem4'));
        setprice(activeSlide.getAttribute('price'));

        // overView
        settourOverView(activeSlide.getAttribute('tourOverView'));
        setIncludeTitle1(activeSlide.getAttribute('IncludeTitle1'));
        setIncludeImg1(activeSlide.getAttribute('IncludeImg1'));


        setIncludeTitle2(activeSlide.getAttribute('IncludeTitle2'));
        setIncludeImg2(activeSlide.getAttribute('IncludeImg2'));

        setIncludeTitle3(activeSlide.getAttribute('IncludeTitle3'));
        setIncludeImg3(activeSlide.getAttribute('IncludeImg3'));

        setIncludeTitle4(activeSlide.getAttribute('IncludeTitle4'));
        setIncludeImg4(activeSlide.getAttribute('IncludeImg4'));

        setIncludeTitle5(activeSlide.getAttribute('IncludeTitle5'));
        setIncludeImg5(activeSlide.getAttribute('IncludeImg5'));


        // Correctly get the 'other-text' attribute
        setOtherText(activeSlide.getAttribute('other-text'));
        setLastSection(activeSlide.getAttribute('last-text'));


        // Reset the animation class
        setAnimationClass('');

        // Trigger reflow to restart the animation
        void activeSlide.offsetWidth;

        setAnimationClass('anime-fade');

    };


    // HOVER IMAGE CHANGE
    const [includeImg, setCurrentImg] = useState('images/package/dune/include1.jpg');

    const items = [
        { title: IncludeTitle1, imgSrc: IncludeImg1 },
        { title: IncludeTitle2, imgSrc: IncludeImg2 },
        { title: IncludeTitle3, imgSrc: IncludeImg3 },
        { title: IncludeTitle4, imgSrc: IncludeImg4 },
        { title: IncludeTitle5, imgSrc: IncludeImg5 },

    ];

    const handleMouseEnter = (imgSrc) => {
        setCurrentImg(imgSrc);
    };



    const swiperRef = React.useRef(null);

    const handleSlideClick = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    };






    return (
        <>

            <section data-scroll-section className='package-banner' >

                <div className="package-banner-bg-wrap" style={{ backgroundImage: `url(${bgImage})` }}>

                </div>

                <div className="package-banner-box">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="left">

                                <h2>{packageBanner}</h2>

                                <p>{bannerDesc}</p>
                                {/* <img loading="lazy" className='changing-img' src={changingImg} alt="Changing" /> */}

                                <div className="offers">

                                    <div className="row g-2">

                                        <div className="col-3">
                                            <div className="offer-item-wrap">
                                                <div className="offer-item">
                                                    <p>{offerItem1}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-3">
                                            <div className="offer-item-wrap">
                                                <div className="offer-item">
                                                    <p>{offerItem2}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-3">
                                            <div className="offer-item-wrap">
                                                <div className="offer-item">
                                                    <p>{offerItem3}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-3">
                                            <div className="offer-item-wrap">
                                                <div className="offer-item">
                                                    <p>{offerItem4}</p>
                                                </div>
                                            </div>
                                        </div>



                                    </div>

                                </div>

                                <h3 className='price'>{price}</h3>

                                <div className="button-row">

                                    <Link to="/contact" className='book-now'>
                                        <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.9734 4.21642C16.1378 4.01475 16.1378 3.68777 15.9734 3.4861L13.2938 0.199597C13.1294 -0.00207908 12.8627 -0.00207908 12.6984 0.199597C12.5339 0.401272 12.5339 0.728254 12.6984 0.929926L15.0802 3.85126L12.6984 6.7726C12.5339 6.97427 12.5339 7.30125 12.6984 7.50292C12.8627 7.70461 13.1294 7.70461 13.2938 7.50292L15.9734 4.21642ZM3.88615 4.36768H15.6756V3.33484H3.88615V4.36768ZM0.0966797 7.98265V10.0483H0.938785V7.98265H0.0966797ZM3.88615 3.33484C1.79329 3.33484 0.0966797 5.41573 0.0966797 7.98265H0.938785C0.938785 5.98615 2.25836 4.36768 3.88615 4.36768V3.33484Z" fill="#EFEFDF" />
                                        </svg>

                                        <p>BOOK NOW</p>
                                    </Link>

                                    <a href='#knowMore' className='know-more'>
                                        <p>Know more</p>
                                        <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.48285 8.70379C7.87149 9.09619 8.50465 9.09924 8.89705 8.71061L15.2916 2.37738C15.684 1.98874 15.687 1.35558 15.2984 0.96318C14.9098 0.570779 14.2766 0.567728 13.8842 0.956367L8.20017 6.5859L2.57064 0.901862C2.182 0.509461 1.54884 0.506411 1.15644 0.895049C0.764037 1.28369 0.760987 1.91685 1.14963 2.30925L7.48285 8.70379ZM7.19337 7.99518L7.19337 7.99528L9.19335 8.00492L9.19335 8.00482L7.19337 7.99518Z" fill="#EFEFDF" />
                                        </svg>

                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="swiper-box hover-effect scale--large show-text">
                                <Swiper
                                    ref={swiperRef}
                                    slidesPerView={2.5}
                                    spaceBetween={10}
                                    initialSlide={0}
                                    centeredSlides={true}
                                    // loop={true}

                                    onSlideChange={handleSlideChange}
                                    grabCursor={true}
                                    pagination={{
                                        clickable: true,
                                        el: '.custom-pagination', // Point to your custom pagination element
                                        renderCustom: (swiper, current, total) => {
                                            let paginationHtml = '';
                                            for (let i = 1; i <= total; i++) {
                                                paginationHtml += `<span class="custom-pagination-bullet ${i === current ? 'custom-pagination-bullet-active' : ''
                                                    }">${i}</span>`;
                                            }
                                            return paginationHtml;
                                        },
                                    }}
                                    modules={[Pagination]}


                                >
                                    <SwiperSlide
                                        onClick={() => handleSlideClick(0)}
                                        // banner
                                        data-bg="images/package/dune/2seater-with-transfer-bg.jpg"
                                        data-text="2 Seater Mleiha Dune Buggy Safari With Transfer"
                                        data-img="images/package/intro1.jpg"
                                        bannerDesc="Experience The Thrill Of A Lifetime On A Dune Buggy Desert Adventure Tour! Race Through The Sand Dunes, Explore Hidden Wadis, And Enjoy Stunning Views Of The Arabian Desert."
                                        offerItem1="4 Hours"
                                        offerItem2="Pickup & Drop-off"
                                        offerItem3="Mleiha Desert"
                                        offerItem4="2 persons"
                                        price="AED 1500 ($409) per buggy"

                                        // overView
                                        tourOverView="Drive through the desert sands and immerse yourself in the Desert Fox experience!"

                                        // Include

                                        IncludeTitle1="Pick-up and Drop-off"
                                        IncludeImg1="images/package/dune/include1.jpg"

                                        IncludeTitle2="Self-drive Dune Buggy Ride"
                                        IncludeImg2="images/package/dune/include2.jpg"

                                        IncludeTitle3="Fossil Discovery at Fossil Rock"
                                        IncludeImg3="images/package/dune/include3.jpg"

                                        IncludeTitle4="Refreshments & Snacks"
                                        IncludeImg4="images/package/dune/include4.jpg"

                                        IncludeTitle5="Sandboarding & Camel Ride"
                                        IncludeImg5="images/package/dune/include5.jpg"


                                        other-text="hii1"
                                        last-text="last11"
                                    >
                                        <div className="card">
                                            <img loading="lazy" className="card-img-top" src="/images/package/dune/2seater-with-transfer.jpg" alt="Card image cap" />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide
                                        onClick={() => handleSlideClick(1)}
                                        // banner
                                        data-bg="images/package/dune/2seater-without-transfer-bg.jpg"
                                        data-text="2 Seater Mleiha Dune Buggy Safari Without Transfer"
                                        data-img="images/package/intro2.jpg"
                                        bannerDesc="Unleash Your Inner Adventurer On A Dune Buggy Desert Safari! With Our Experienced Guides, You’ll Experience The Best Of The Desert, From Soaring Dune Tops To Hidden Oasis."
                                        offerItem1="4 Hours"
                                        offerItem2="No Pickup"
                                        offerItem3="Mleiha Desert"
                                        offerItem4="2 persons"
                                        price="AED 1000 ($273) per Buggy
"

                                        // overView
                                        tourOverView="With the vast sands of the Arabian Desert at your disposal, you get a chance to step into our Desert Fox dune buggy for the adventure of a lifetime, and you’ll have multiple photo opportunities for keepsakes. The true beauty of the desert comes at sunset, so sit back, relax and watch the sun go down, as you sip on cool refreshments and soothe your senses. Enjoy the tranquillity and coolness of the desert at night, far from the bustling noise of the city and take in the fresh air and beautiful starry night sky, too! Retreat to our Bedouin-themed campsite once you’re ready, where you can stoke on some shisha while our chefs prepare a wondrous meal specially curated just for you. Dine under a blanket of stars in a traditional Arabian setting!"

                                        // Include

                                        IncludeTitle1="Pick-up And Drop-off To Your Hotel."
                                        IncludeImg1="images/package/dune/include2.jpg"

                                        IncludeTitle2="Self-drive 2 Seater Dune Buggy Safari X 1 Hr."
                                        IncludeImg2="images/package/dune/include2.jpg"

                                        IncludeTitle3="Photo Stop At Fossil Rock And Camel Rock."
                                        IncludeImg3="images/package/dune/include3.jpg"

                                        IncludeTitle4="Changing Room Facilities."
                                        IncludeImg4="images/package/dune/include4.jpg"

                                        IncludeTitle5="Refreshments & Snacks."
                                        IncludeImg5="images/package/dune/include5.jpg"




                                        other-text="hii2"
                                        last-text="last12"
                                    >
                                        <div className="card">
                                            <img loading="lazy" className="card-img-top" src="/images/package/dune/2seater-without-transfer.jpg" alt="Card image cap" />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide
                                        onClick={() => handleSlideClick(2)}
                                        // banner
                                        data-bg="images/package/dune/3-bg.jpg"
                                        data-text="4 Seater Mleiha Dune Buggy Safari With Transfer"
                                        data-img="images/package/banner-slide2.jpg"
                                        bannerDesc="Experience The Magic Of The Arabian Sunset On A Dune Buggy Tour. As The Sun Dips Below The Horizon, The Desert Comes Alive With Color."
                                        offerItem1="4 Hours"
                                        offerItem2="Pickup & Drop-off"
                                        offerItem3="Mleiha Desert"
                                        offerItem4="4 persons"
                                        price="AED 1800 ($491) per buggy"

                                        // overView
                                        tourOverView="Experience The Thrill Of A Dune Buggy Safari In Mleiha, The Archaeological And Cultural Heart Of Sharjah. This 2-hour Adventure Will Take You Through The Stunning Desert Landscapes Of Mleiha, Passing By Landmarks Like Fossil Rock And Camel Rock. You’ll Drive Your Own 4-seater Dune Buggy, Following An Experienced Marshal Who Will Lead The Convoy Through The Dunes. You’ll Get To Experience The Adrenaline Rush Of Dune Bashing, As Well As The More Scenic Parts Of The Desert."

                                        // Include

                                        IncludeTitle1="Pick-up And Drop-off To Your Hotel."
                                        IncludeImg1="images/package/dune/include1.jpg"

                                        IncludeTitle2="Self-drive 4 Seater Dune Buggy Safari X 1 Hr."
                                        IncludeImg2="images/package/dune/include2.jpg"

                                        IncludeTitle3="Photo Stop At Fossil Rock And Camel Rock."
                                        IncludeImg3="images/package/dune/include3.jpg"

                                        IncludeTitle4="Changing Room Facilities."
                                        IncludeImg4="images/package/dune/include4.jpg"

                                        IncludeTitle5="Refreshments & Snacks."
                                        IncludeImg5="images/package/dune/include5.jpg"

                                        other-text="hii3"
                                        last-text="last13"
                                    >
                                        <div className="card">
                                            <img loading="lazy" className="card-img-top" src="/images/package/dune/4-Seater-Mleiha-Dune-Buggy-Safari-With-Transfer.jpg" alt="Card image cap" />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide
                                        onClick={() => handleSlideClick(3)}
                                        // banner
                                        data-bg="images/package/dune/4-bg.jpg"
                                        data-text="4 Seater Mleiha Dune Buggy Safari Without Transfer"
                                        data-img="images/package/banner-slide3.jpg"
                                        bannerDesc="Drive through the desert sands and immerse yourself in the Desert Fox experience!"
                                        offerItem1="4 Hours"
                                        offerItem2="No Pickup"
                                        offerItem3="Mleiha Desert"
                                        offerItem4="4 persons"
                                        price="AED 1300 ($354) per Buggy"

                                        // overView
                                        tourOverView="Experience The Thrill Of Dune Bashing In Mleiha With This Self-drive 4-seater Dune Buggy Safari. After Meeting At The Designated Meeting Point, You Will Be Given A Safety Briefing And Training On How To Operate The Dune Buggy. Once You Are Comfortable, You Will Set Off On An Exhilarating 30-minute To 1-hour Drive Through The Mleiha Desert. Navigate The Undulating Dunes, Experience The Exhilaration Of The Desert Winds, And Let The Beauty Of The Arid Landscape Captivate Your Senses. You Will Also Have The Opportunity To Stop At Various Viewpoints To Take Photos And Enjoy The Scenery."

                                        // Include

                                        IncludeTitle1="Pick-up And Drop-off To Your Hotel"
                                        IncludeImg1="images/package/dune/include1.jpg"

                                        IncludeTitle2="Self-drive 4 Seater Dune Buggy Safari X 1 Hr Photo Stop At Fossil Rock And Camel Rock."
                                        IncludeImg2="images/package/dune/include2.jpg"

                                        IncludeTitle3="Changing Room Facilities."
                                        IncludeImg3="images/package/dune/include3.jpg"

                                        IncludeTitle4="Refreshments & Snacks."
                                        IncludeImg4="images/package/dune/include4.jpg"

                                        IncludeTitle5="Safety Gear."
                                        IncludeImg5="images/package/dune/include5.jpg"

                                        other-text="hii3"
                                        last-text="last13"
                                    >
                                        <div className="card">
                                            <img loading="lazy" className="card-img-top" src="/images/package/dune/4-Seater-Mleiha-Dune-Buggy-Safari-Without-Transfer.jpg" alt="Card image cap" />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide
                                        onClick={() => handleSlideClick(4)}
                                        // banner
                                        data-bg="images/package/dune/5-bg.jpg"
                                        data-text="Dune Buggy With Private Dinner ( 2 Seater)"
                                        data-img="images/package/banner-slide3.jpg"
                                        bannerDesc="A day out on the sands in the Desert Fox coupled with a delicious meal by starlight!"
                                        offerItem1="7 hours"
                                        offerItem2="Pickup & Drop-off"
                                        offerItem3="Mleiha Desert"
                                        offerItem4="Min. 2 persons"
                                        price="AED 3000 ($817) per couple"

                                        // overView
                                        tourOverView="Step into the desert for a day of leisurely drives through the dunes in our Desert Fox dune buggies. Drive through the desert sands and immerse yourself in the Desert Fox experience! Once the sun sets on the Arabian horizon, sit back, relax and take in stunning views of the desert with multiple photo opportunities. Finally, retreat to our private and cosy seating arrangement where you can stoke on some shisha while our chefs prepare a delicious Arabian meal for your dinner."

                                        // Include

                                        IncludeTitle1="Private Pick-up And Drop-off To Your Hotel."
                                        IncludeImg1="images/package/dune/include1.jpg"

                                        IncludeTitle2="Self-drive Dune Buggy Safari X 1 Hr."
                                        IncludeImg2="images/package/dune/include2.jpg"

                                        IncludeTitle3="Photo Stop At Fossil Rock And Camel Rock."
                                        IncludeImg3="images/package/dune/include3.jpg"

                                        IncludeTitle4="Changing Room Facilities."
                                        IncludeImg4="images/package/dune/include4.jpg"

                                        IncludeTitle5="Refreshments & Snacks."
                                        IncludeImg5="images/package/dune/include5.jpg"

                                        other-text="hii3"
                                        last-text="last13"
                                    >
                                        <div className="card">
                                            <img loading="lazy" className="card-img-top" src="/images/package/dune/Dune-Buggy-With-Private-Dinner-(2Seater).jpg" alt="Card image cap" />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide
                                        onClick={() => handleSlideClick(5)}
                                        // banner
                                        data-bg="images/package/dune/6-bg.jpg"
                                        data-text="Dune Buggy With Desert Safari ( 2 Seater)"
                                        data-img="images/package/banner-slide3.jpg"
                                        bannerDesc="Spend the afternoon out on the desert in our Desert Fox dune buggies and retire to a Bedouin-themed campsite for dinner after!"
                                        offerItem1="8 Hours"
                                        offerItem2="Pickup & Drop-off"
                                        offerItem3="Mleiha Desert"
                                        offerItem4="Min. 2 persons"
                                        price="AED 2000 ($545) per person"

                                        // overView
                                        tourOverView="Take to the desert in your very own Desert Fox dune buggy in an experience you won’t soon forget! You’ll be at the helm of our fully-customized Desert Fox dune buggy, designed with safety as the utmost priority. A team will be on hand to assist you with any mechanical to technical difficulties."

                                        // Include

                                        IncludeTitle1="Pick-up And Drop-off To Your Hotel."
                                        IncludeImg1="images/package/dune/include1.jpg"

                                        IncludeTitle2="Self-drive Dune Buggy Safari X 1 Hr."
                                        IncludeImg2="images/package/dune/include2.jpg"

                                        IncludeTitle3="Changing Room Facilities."
                                        IncludeImg3="images/package/dune/include3.jpg"

                                        IncludeTitle4="Refreshments"
                                        IncludeImg4="images/package/dune/include4.jpg"

                                        IncludeTitle5="Safety Gear."
                                        IncludeImg5="images/package/dune/include5.jpg"

                                        other-text="hii3"
                                        last-text="last13"
                                    >
                                        <div className="card">
                                            <img loading="lazy" className="card-img-top" src="/images/package/dune-banner-slide4.png" alt="Card image cap" />
                                        </div>
                                    </SwiperSlide>

                                </Swiper>
                            </div>

                        </div>
                    </div>




                </div>

                <div class="swiper-container">
                    <div class="custom-pagination"></div>
                </div>

            </section>


            <section id='knowMore' className="tour-overview" data-scroll-section>
                <div className="container-fluid">

                    <div className="image-box">
                        <div className="row g-5">
                            <div className="col-lg-7">
                                <div className="left">
                                    <img loading="lazy" data-scroll data-scroll-speed="0.5" className='img-fluid' src="/images/package/dune/2seater-with1.jpg" alt="" />

                                    <svg className='img-fluid' width="432" height="579" viewBox="0 0 432 579" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.113249 3L3 5.88675L5.88675 3L3 0.113249L0.113249 3ZM431.887 3L429 0.113249L426.113 3L429 5.88675L431.887 3ZM3 3.5H429V2.5H3V3.5Z" fill="#9C5849" />
                                        <path d="M197.488 89.6133L194.613 92.512L197.512 95.3867L200.387 92.488L197.488 89.6133ZM199.512 578.387L202.387 575.488L199.488 572.613L196.613 575.512L199.512 578.387ZM197 92.5021L199 575.502L200 575.498L198 92.4979L197 92.5021Z" fill="#9C5849" />
                                    </svg>


                                </div>

                                <div className="heading-box">
                                    <h2>Tour Overview</h2>

                                    <p className='para'>Dive into the thrilling landscapes of the Mleiha Desert with our dune buggy safari adventure. Designed for your convenience, our package includes pick-up and drop-off services directly from your hotel, ensuring a smooth and hassle-free experience. Get ready to drive your own dune buggy on an adrenaline-pumping, hour-long ride across the stunning desert terrain. Along the way, capture unforgettable moments with the breathtaking views of Fossil Rock and Camel Rock.Post-ride, relax and recharge with provided refreshments and snacks, utilizing our comfortable changing room facilities. Next, equip yourself with safety gear and conquer the dunes with exhilarating sandboarding. Continue your desert journey with an authentic camel ride, followed by a guided nature walk to explore the diverse flora and fauna unique to this region.This all-inclusive package promises an unforgettable adventure, perfect for both thrill-seekers and nature lovers.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="right">
                                    <img loading="lazy" data-scroll data-scroll-speed="0.5" className='img-fluid' src="/images/package/dune/2seater-with2.jpg" alt="" />
                                    <img loading="lazy" className='img-fluid tour-overview-icon' src="/images/package/tour-overview-icon.png" alt="" />

                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </section>

            <section className='include-package' data-scroll-section>
                <div className="container">
                    <div className="heading-box">
                        <h2>
                            Our Package Includes
                        </h2>
                    </div>
                    <div className="content-box">
                        <div className="row">
                            <div className="col-lg-5 d-flex align-items-center">
                                <div className="left">
                                    {items.map((item, index) => (
                                        <div
                                            className="include-item"
                                            key={index}
                                            onMouseEnter={() => handleMouseEnter(item.imgSrc)}
                                        >
                                            <h4 className="show-text hover-effect scale--large">
                                                {item.title}
                                            </h4>
                                            <img loading="lazy" src={item.imgSrc} alt="" className="d-none" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="right shine">
                                    <div className="inner-box1">
                                        <div className="content-wrapper">

                                            <h5>
                                                Pickup And Drop Off At The Hotel (Private Car).
                                            </h5>

                                            <div className="img-box">
                                                <img loading="lazy" className="img-fluid" src={includeImg} alt="" />
                                            </div>
                                            <img loading="lazy" className='img-fluid logo' src="/images/package/include-logo.png" alt="" />


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='package-catagory' data-scroll-section>
                <div className="container-fluid">

                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="left">
                                <img loading="lazy" className='img-fluid' src="/images/package/catagory-icon.png" alt="" />
                                <div className="img-box">
                                    <img loading="lazy" data-scroll data-scroll-speed="0.5" className='img-fluid' src="/images/package/dune/2seater-with3.jpg" alt="" />
                                    <svg width="8" height="489" viewBox="0 0 8 489" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.98805 0.113273L0.113273 3.01195L3.01195 5.88673L5.88673 2.98805L2.98805 0.113273ZM5.01195 488.887L7.88673 485.988L4.98805 483.113L2.11327 486.012L5.01195 488.887ZM2.5 3.00207L4.5 486.002L5.5 485.998L3.5 2.99793L2.5 3.00207Z" fill="#9C5849" />
                                    </svg>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="right">
                                <div className="heading-box">
                                    <h2>PrivateDinner Desert</h2>
                                    <p>Enjoy the thrill and excitement of riding a dune buggy through the Mleiha desert. With each turn, you’ll discover the beauty and vastness of the sandy dunes and rugged terrain. The experience offers stunning views of the endless desert landscape, creating a perfect blend of adventure and scenery. It’s an unforgettable journey, ideal for both thrill-seekers and those who appreciate the wonders of nature.</p>
                                </div>

                                <svg width="432" height="6" viewBox="0 0 432 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.113249 3L3 5.88675L5.88675 3L3 0.113249L0.113249 3ZM431.887 3L429 0.113249L426.113 3L429 5.88675L431.887 3ZM3 3.5H429V2.5H3V3.5Z" fill="#9C5849" />
                                </svg>

                                <div className="img-box">
                                    <img loading="lazy" data-scroll data-scroll-speed="0.5" className='img-fluid' src="/images/package/dune/2seater-with4.jpg" alt="" />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="package-testimonial" id='packageTestimonial' data-scroll-section>
                <div className="container-fluid">
                    <div className="box-wrap row">

                        <div className="col-xl-4 col-lg-4">
                            <div className="box box1">
                                <div className="inner-box">
                                    <div className="content-box testimonial-content">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <div className="left">
                                                    <p>
                                                        Amazing Dune buggy adventure. We felt very safe and secure with their Dune buggies (Desert Fox sand rails). We enjoyed the view from the desert and the team who assisted us were very professional. Great way to enjoy the desert
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="col-lg-4">
                                                <div className="right">
                                                    <div className="square">
                                                        <img loading="lazy" src="/images/package/dune-testimonial1.jpg" alt="" />
                                                        <img loading="lazy" className='hover-change' src="/images/package/dune-testimonial1.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bottom">
                                            <h6>Ed DubaiTravelBlog</h6>

                                            <div className="rating">
                                                <img loading="lazy" src="/images/package/rating.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <div className="box box2">
                                <div className="inner-box">
                                    <div className="content-box testimonial-content">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <div className="left">
                                                    <p>
                                                        It was a really nice tour with the guide Youssef, Garith, and Harish. I appreciated also their help with a planting my car tire.🙈❤️
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="col-lg-4">
                                                <div className="right">
                                                    <div className="square">
                                                        <img loading="lazy" src="/images/package/dune-testimonial2.jpg" alt="" />
                                                        <img loading="lazy" className='hover-change' src="/images/package/dune-testimonial2.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bottom">
                                            <h6>Mohamed ElSayed</h6>

                                            <div className="rating">
                                                <img loading="lazy" src="/images/package/rating.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4">
                            <div className="box box3">
                                <div className="inner-box">
                                    <div className="content-box testimonial-content">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <div className="left">
                                                    <p>
                                                        Unique, everyone should have it on their to do list...😉 …
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="col-lg-4">
                                                <div className="right">
                                                    <div className="square">
                                                        <img loading="lazy" src="/images/package/dune-testimonial3.jpg" alt="" />
                                                        <img loading="lazy" className='hover-change' src="/images/package/dune-testimonial3.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bottom">
                                            <h6>Steven Deinert</h6>

                                            <div className="rating">
                                                <img loading="lazy" src="/images/package/rating.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </section>

            <section className='faq' data-scroll-section>
                <div className="container-fluid">
                    <div className="heading-box">
                        <h2>FAQ</h2>
                    </div>

                    <div className="content-box">

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="left">
                                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Is There Any Age Limit For Dune Buggy Tours? </Accordion.Header>
                                            <Accordion.Body>
                                                Drivers Should Be Above 16 Years
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>What Is The Cancellation Policy?</Accordion.Header>
                                            <Accordion.Body>
                                                No Cancellation Charges For 1 Day Notice Before The Buggy Tour . Full Charged For Less Than 24 Hours Notice Or No Show
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Can I Get A Refund On Unused Or Partially Unused Services</Accordion.Header>
                                            <Accordion.Body>
                                                No
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>How Long Will It Take For The Processing Of Refunds?</Accordion.Header>
                                            <Accordion.Body>
                                                7 To 8 Working Days.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>What should I wear and bring for the buggy tours?</Accordion.Header>
                                            <Accordion.Body>
                                                Participants are advised to wear comfortable outdoor clothing suitable for the weather conditions. Since the safari involves dusty and sandy terrain, closed-toe shoes are recommended. Additionally, it’s essential to bring sunscreen, sunglasses, a hat, and plenty of water to stay hydrated throughout the excursion.
                                            </Accordion.Body>
                                        </Accordion.Item>


                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>Can I bring my camera or GoPro on the safari?</Accordion.Header>
                                            <Accordion.Body>
                                                Yes, participants are encouraged to bring cameras or action cameras such as GoPros to capture unforgettable moments during the safari. However, it’s essential to secure these devices properly to prevent damage while traversing rugged terrain.
                                            </Accordion.Body>
                                        </Accordion.Item>


                                        <Accordion.Item eventKey="6">
                                            <Accordion.Header>
                                                How can I contact Zerzura Experience for more information or to book a safari Dubai?</Accordion.Header>
                                            <Accordion.Body>
                                                For more information or to book a dune buggy , you can contact Zerzura Experience through their website, email, or phone. They have dedicated customer service representatives who can assist with inquiries and bookings.
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="7">
                                            <Accordion.Header>
                                                Are meals included in the dune buggy packages?</Accordion.Header>
                                            <Accordion.Body>
                                                Meal inclusions vary depending on the safari package. Some packages may include meals, while others may offer meal options for an additional cost. Zerzura Experience provides details regarding meal inclusions and options for each safari package.
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="8">
                                            <Accordion.Header>
                                                Are helmets provided, and do I need to wear one?</Accordion.Header>
                                            <Accordion.Body>
                                                Yes, helmets are provided for all participants, and wearing them is mandatory throughout the duration of the safari for your safety.
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="9">
                                            <Accordion.Header>
                                                Can children ride along on the tours?</Accordion.Header>
                                            <Accordion.Body>
                                                Yes, children can ride as passengers with a parent or guardian as long as they meet the minimum age requirement set by our safety guidelines.
                                            </Accordion.Body>
                                        </Accordion.Item>

                                    </Accordion>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="right">
                                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>What Are The Procedures To Cancel A Reservation And Request A Refund?</Accordion.Header>
                                            <Accordion.Body>
                                                Send Us An E-mail Confirming That You Want To Cancel The Reservation. We’ll Be More Than Happy To Help You With The Process
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                What should I expect during the tours?</Accordion.Header>
                                            <Accordion.Body>
                                                During the dune buggy rides, Dubai expect to encounter thrilling terrain including sand dunes, desert trails, and possibly even rocky terrain. You’ll navigate through varying landscapes while enjoying panoramic views of the desert. The experience combines adventure with the opportunity to appreciate the natural beauty of the surroundings.
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>
                                                Do I need prior driving experience to join the safari?</Accordion.Header>
                                            <Accordion.Body>
                                                No prior driving experience is necessary. Our expert guides will provide comprehensive safety briefings and instructions on operating the dune buggies Dubai. They will ensure that all participants feel comfortable and confident before embarking on the adventure.
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>Are there any specific rules or guidelines I should follow during the safari?</Accordion.Header>
                                            <Accordion.Body>
                                                Yes, participants are expected to follow the instructions provided by the tour guide, including staying on designated trails, maintaining a safe distance from other vehicles, and respecting the natural environment.
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>
                                                Is the Dune Buggy safe?</Accordion.Header>
                                            <Accordion.Body>
                                                Safety is our top priority, and our dune buggies are meticulously maintained to ensure optimal performance and reliability. Additionally, our experienced guides are trained in first aid and equipped with communication devices to handle any emergencies that may arise during the safari.
                                            </Accordion.Body>
                                        </Accordion.Item>


                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>
                                                Is transportation provided to the safari location?</Accordion.Header>
                                            <Accordion.Body>
                                                Zerzura Experience may offer transportation services as part of the safari package, depending on the location and package chosen. Participants are advised to check the details of their chosen package for transportation arrangements.
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="6">
                                            <Accordion.Header>
                                                Do I need to book in advance for a dune buggy tours with Zerzura Experience?</Accordion.Header>
                                            <Accordion.Body>
                                                It’s highly recommended to book in advance to secure your spot, especially during peak seasons. Zerzura Experience may accommodate last-minute bookings depending on availability, but advance booking ensures availability and allows for better planning.
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="7">
                                            <Accordion.Header>
                                                Can pregnant women participate in the dune buggy?</Accordion.Header>
                                            <Accordion.Body>
                                                No, for safety reasons, pregnant women are not allowed to drive or participate in the dune buggy rides. The terrain and conditions can be unpredictable, and we prioritize the safety and well-being of all our guests, including unborn children.
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="8">
                                            <Accordion.Header>
                                                Are there any medical restrictions for participating in the dune buggy dubai?</Accordion.Header>
                                            <Accordion.Body>
                                                While there are no specific medical restrictions, participants should be in good physical health and free from any conditions that could be aggravated by the bumpy terrain or outdoor conditions. If you have any concerns, please consult with your healthcare provider before booking.
                                            </Accordion.Body>
                                        </Accordion.Item>

                                    </Accordion>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </section>


            {/* 
            <section className='next-section' data-scroll-section>
                <h1 className='other-text'>{otherText}</h1>
            </section>

            <section className='next-section' data-scroll-section>
                <h1 className='last-text'>{LastSection}</h1>
            </section> */}

        </>
    );
};

export default DuneBuggyExperience;
