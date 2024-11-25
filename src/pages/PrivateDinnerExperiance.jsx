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

const PrivateDinnerExperiance = () => {



    // MAIN DATA CHANGING SECTION 
    // banner
    const [bgImage, setBgImage] = useState('images/package/dune/3-bg.jpg');
    const [packageBanner, setpackageBanner] = useState('Private Dinner With Mleiha Safari');
    const [changingImg, setChangingImg] = useState('images/package/intro1.jpg');
    const [bannerDesc, setbannerDesc] = useState('Enjoy a delicious meal under the stars, surrounded by the stunning scenery of this historic UNESCO World Heritage Site.');
    const [offerItem1, setofferItem1] = useState('6 hours');
    const [offerItem2, setofferItem2] = useState('Pickup Dropoff');
    const [offerItem3, setofferItem3] = useState('Mleiha Desert');
    const [offerItem4, setofferItem4] = useState('Min. 2 persons');
    const [price, setprice] = useState('AED 2200 ($599) for 2 person');

    // overview
    const [tourOverView, settourOverView] = useState('Experience The Magic Of The Arabian Desert On A Private Dinner Safari To Mleiha. This Unique Tour Takes You To One Of The Most Culturally Significant Sites In The United Arab Emirates, Where You’ll Explore Ancient Ruins, Learn About The Region’s Rich History, And Enjoy A Delicious Traditional Dinner Under The Stars.');

    // Package Include
    const [IncludeTitle1, setIncludeTitle1] = useState('Pickup And Drop Off At The Hotel (Private Car).');
    const [IncludeImg1, setIncludeImg1] = useState('images/package/dune/include1.jpg');

    const [IncludeTitle2, setIncludeTitle2] = useState('Introduction To Mleiha.');
    const [IncludeImg2, setIncludeImg2] = useState('images/package/dune/include2.jpg');

    const [IncludeTitle3, setIncludeTitle3] = useState('Zerzura ExperienceShow.');
    const [IncludeImg3, setIncludeImg3] = useState('images/package/dune/include3.jpg');

    const [IncludeTitle4, setIncludeTitle4] = useState('Camel Ride.');
    const [IncludeImg4, setIncludeImg4] = useState('images/package/dune/include4.jpg');

    const [IncludeTitle5, setIncludeTitle5] = useState('Nature Walk.');
    const [IncludeImg5, setIncludeImg5] = useState('images/package/dune/include5.jpg');

    const [IncludeTitle6, setIncludeTitle6] = useState('Sandboarding.');
    const [IncludeImg6, setIncludeImg6] = useState('images/package/dune/include1.jpg');

    const [IncludeTitle7, setIncludeTitle7] = useState('Dinner Campfire');
    const [IncludeImg7, setIncludeImg7] = useState('images/package/dune/include2.jpg');

    const [IncludeTitle8, setIncludeTitle8] = useState('Dinner Campfire');
    const [IncludeImg8, setIncludeImg8] = useState('images/package/dune/include3.jpg');

    const [IncludeTitle9, setIncludeTitle9] = useState('Dinner Campfire');
    const [IncludeImg9, setIncludeImg9] = useState('images/package/dune/include4.jpg');

    const [IncludeTitle10, setIncludeTitle10] = useState('Dinner Campfire');
    const [IncludeImg10, setIncludeImg10] = useState('images/package/dune/include5.jpg');



    const [otherText, setOtherText] = useState('Other Text'); // Default text
    const [LastSection, setLastSection] = useState('Last Setionc'); // Default text

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

        // inlude 
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

        setIncludeTitle6(activeSlide.getAttribute('IncludeTitle6'));
        setIncludeImg6(activeSlide.getAttribute('IncludeImg6'));

        setIncludeTitle7(activeSlide.getAttribute('IncludeTitle7'));
        setIncludeImg7(activeSlide.getAttribute('IncludeImg7'));


        setIncludeTitle8(activeSlide.getAttribute('IncludeTitle8'));
        setIncludeImg8(activeSlide.getAttribute('IncludeImg8'));


        setIncludeTitle9(activeSlide.getAttribute('IncludeTitle9'));
        setIncludeImg9(activeSlide.getAttribute('IncludeImg9'));


        setIncludeTitle10(activeSlide.getAttribute('IncludeTitle10'));
        setIncludeImg10(activeSlide.getAttribute('IncludeImg10'));


        // Correctly get the 'other-text' attribute
        setOtherText(activeSlide.getAttribute('other-text'));
        setLastSection(activeSlide.getAttribute('last-text'));
    };


    // HOVER IMAGE CHANGE
    const [includeImg, setCurrentImg] = useState('images/package/dune/include1.jpg');

    const items = [
        { title: IncludeTitle1, imgSrc: IncludeImg1 },
        { title: IncludeTitle2, imgSrc: IncludeImg2 },
        { title: IncludeTitle3, imgSrc: IncludeImg3 },
        { title: IncludeTitle4, imgSrc: IncludeImg4 },
        { title: IncludeTitle5, imgSrc: IncludeImg5 },
        { title: IncludeTitle6, imgSrc: IncludeImg6 },
        { title: IncludeTitle7, imgSrc: IncludeImg7 },

        { title: IncludeTitle8, imgSrc: IncludeImg8 },
        { title: IncludeTitle9, imgSrc: IncludeImg9 },
        { title: IncludeTitle10, imgSrc: IncludeImg10 },
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
                        <div className="col-lg-6">
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

                                    <a href='#know-more' className='know-more'>

                                        <p>Know more</p>
                                        <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.48285 8.70379C7.87149 9.09619 8.50465 9.09924 8.89705 8.71061L15.2916 2.37738C15.684 1.98874 15.687 1.35558 15.2984 0.96318C14.9098 0.570779 14.2766 0.567728 13.8842 0.956367L8.20017 6.5859L2.57064 0.901862C2.182 0.509461 1.54884 0.506411 1.15644 0.895049C0.764037 1.28369 0.760987 1.91685 1.14963 2.30925L7.48285 8.70379ZM7.19337 7.99518L7.19337 7.99528L9.19335 8.00492L9.19335 8.00482L7.19337 7.99518Z" fill="#EFEFDF" />
                                        </svg>

                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="swiper-box hover-effect scale--large show-text" >
                                <Swiper
                                    ref={swiperRef}
                                    slidesPerView={2}
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
                                        data-bg="images/package/dune/3-bg.jpg"
                                        data-text="Private Dinner With Mleiha Safari"
                                        data-img="images/package/intro1.jpg"
                                        bannerDesc="Enjoy a delicious meal under the stars, surrounded by the stunning scenery of this historic UNESCO World Heritage Site."
                                        offerItem1="6 hours"
                                        offerItem2="Pickup & Drop-off"
                                        offerItem3="Mleiha Desert"
                                        offerItem4="Min. 2 persons"
                                        price="AED 2200 ($599) for 2 person"

                                        // overView
                                        tourOverView="Experience The Magic Of The Arabian Desert On A Private Dinner Safari To Mleiha. This Unique Tour Takes You To One Of The Most Culturally Significant Sites In The United Arab Emirates, Where You’ll Explore Ancient Ruins, Learn About The Region’s Rich History, And Enjoy A Delicious Traditional Dinner Under The Stars."

                                        // Include

                                        IncludeTitle1="Pickup And Drop Off At The Hotel (Private Car)."
                                        IncludeImg1="images/package/dune/include1.jpg"

                                        IncludeTitle2="Introduction To Mleiha."
                                        IncludeImg2="images/package/dune/include2.jpg"

                                        IncludeTitle3="Zerzura ExperienceShow."
                                        IncludeImg3="images/package/dune/include3.jpg"

                                        IncludeTitle4="Camel Ride."
                                        IncludeImg4="images/package/dune/include4.jpg"

                                        IncludeTitle5="Nature Walk."
                                        IncludeImg5="images/package/dune/include5.jpg"

                                        IncludeTitle6="Sandboarding."
                                        IncludeImg6="images/package/dune/include1.jpg"

                                        IncludeTitle7="Dinner Campfire"
                                        IncludeImg7="images/package/dune/include2.jpg"

                                        other-text="hii1"
                                        last-text="last11"
                                    >
                                        <div className="card">
                                            <img loading="lazy" className="card-img-top" src="/images/package/dune/pvt-dinner1.jpg" alt="Card image cap" />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide
                                        onClick={() => handleSlideClick(1)}
                                        // banner
                                        data-bg="images/package/dune/4-bg.jpg"
                                        data-text="Dune Buggy With Private Dinner ( 2 Seater)"
                                        data-img="images/package/intro2.jpg"
                                        bannerDesc="A day out on the sands in the Desert Fox coupled with a delicious meal by starlight!"
                                        offerItem1="7 hours"
                                        offerItem2="4x4 luxury"
                                        offerItem3="Mleiha Desert"
                                        offerItem4="Min. 2 persons"
                                        price="AED 3000 ($817) for 2 Person"

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

                                        IncludeTitle6="Sandboarding"
                                        IncludeImg6="images/package/dune/include1.jpg"

                                        IncludeTitle7="And Camel Ride Introduction To Mleiha (Guided Educational Intro To Culture And History Of Mleiha)"
                                        IncludeImg7="images/package/dune/include2.jpg"

                                        IncludeTitle8="Nature Walk (Guided Walk To Discover The Flora And Fauna Or The Area).
Private Dining In A Bespoke Setup In The Middle Of The Desert, Campfire."
                                        IncludeImg8="images/package/dune/include3.jpg"

                                        IncludeTitle9="Premium Menu And Beverages."
                                        IncludeImg9="images/package/dune/include4.jpg"

                                        IncludeTitle10="Zerzura ExperienceShow & Interaction"
                                        IncludeImg10="images/package/dune/include5.jpg"

                                        other-text="hii2"
                                        last-text="last12"
                                    >
                                        <div className="card">
                                            <img loading="lazy" className="card-img-top" src="/images/package/dune/pvt-dinner2.jpg" alt="Card image cap" />
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


            <section id='know-more' className="tour-overview" data-scroll-section>
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

                                    <p className='para'>{tourOverView}
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="right">
                                    <img loading="lazy" data-scroll data-scroll-speed="0.5" className='img-fluid' src="/images/package/dune/2seater-with3.jpg" alt="" />
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
                                            <img loading="lazy" className='img-fluid' src="/images/package/include-logo.png" alt="" />


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
                                    <img loading="lazy" data-scroll data-scroll-speed="0.5" className='img-fluid' src="/images/package/dune/2seater-with2.jpg" alt="" />
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
                            <div className="box box1 h-100">
                                <div className="inner-box">
                                    <div className="content-box testimonial-content">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <div className="left">
                                                    <p>
                                                        Unforgettable experience, I was surrounded by great professionals, true specialists in events in the desert. We really enjoyed all the activities offered: Buggy, dinner party in the desert, sand surfing, camel ride, visit archaeological site.
                                                        The meal in the desert was superb both in terms of its quality and the atmosphere.
                                                        I recommend ZERZURA without reservation
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="col-lg-4">
                                                <div className="right">
                                                    <div className="square">
                                                        <img loading="lazy" src="/images/package/dune-testimonial4.jpg" alt="" />
                                                        <img loading="lazy" className='hover-change' src="/images/package/dune-testimonial4.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bottom">
                                            <h6>Gilles Houver</h6>

                                            <div className="rating">
                                                <img loading="lazy" src="/images/package/rating.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4">
                            <div className="box box2 h-100">
                                <div className="inner-box">
                                    <div className="content-box testimonial-content">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <div className="left">
                                                    <p>
                                                        Imagine bashing the highest sand dunes, sandboarding to the depths below and enjoying a private dinner while counting stars near a campfire in the middle of the red san desert - THIS IS THAT. Our driver Stanli picked us up front door with such gracious service - safe and comfortable! Amazing experience that everyone absolutely deserves in Dubai! 10/10 HIGHLY RECOMMEND ZERZURA!
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="col-lg-4">
                                                <div className="right">
                                                    <div className="square">
                                                        <img loading="lazy" src="/images/package/dune-testimonial5.png" alt="" />
                                                        <img loading="lazy" className='hover-change' src="/images/package/dune-testimonial5.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bottom">
                                            <h6>Michelle Flores</h6>

                                            <div className="rating">
                                                <img loading="lazy" src="/images/package/rating.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4">
                            <div className="box box3 h-100">
                                <div className="inner-box">
                                    <div className="content-box testimonial-content">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <div className="left">
                                                    <p>
                                                        We booked a desert tour with Explorer Tours. Increadible! Our driver Sudeesh is a genious on the dune bashing and Umer prepared a fantastic romantic privat dinner for us. This was an absolut unforgettable adventure and a phantastic day. Many, many thanks to Sudeesh and Umer for this thrilling experience!
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="col-lg-4">
                                                <div className="right">
                                                    <div className="square">
                                                        <img loading="lazy" src="/images/package/dune-testimonial6.jpg" alt="" />
                                                        <img loading="lazy" className='hover-change' src="/images/package/dune-testimonial6.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bottom">
                                            <h6>Der Poltergeist</h6>

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
                                            <Accordion.Header>Is There Any Age Limit For Dune Buggy Tours?</Accordion.Header>
                                            <Accordion.Body>
                                                Drivers Should Be Above 16 Years And Passengers Should Be Above 9 Years To Use The Buggy.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>What Is The Cancellation Policy?</Accordion.Header>
                                            <Accordion.Body>
                                                No Cancellation Charges For 1 Day Notice Before The Buggy Safari Tour. Full Charged For Less Than 24 Hours Notice Or No Show
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Can I Get A Refund On Unused Or Partially Unused Services?</Accordion.Header>
                                            <Accordion.Body>
                                                No
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>
                                                How Long Will It Take For The Processing Of Refunds?</Accordion.Header>
                                            <Accordion.Body>
                                                7 To 8 Working Days.
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
                                            <Accordion.Header>What To Wear Buggy Safari Tours?</Accordion.Header>
                                            <Accordion.Body>
                                                While there is no dress code, we recommend you to wear loose and comfortable clothing. We also recommend wearing closed shoes.
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Does Zerzura Experience Incur Additional Charge For Making Payment By Credit Card?</Accordion.Header>
                                            <Accordion.Body>
                                                An Additional 2.9% Applies For Online Payment.
                                            </Accordion.Body>
                                        </Accordion.Item>

                                    </Accordion>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </section>



            {/* <section className='next-section' data-scroll-section>
                <h1 className='other-text'>{otherText}</h1>
            </section>

            <section className='next-section' data-scroll-section>
                <h1 className='last-text'>{LastSection}</h1>
            </section> */}

        </>
    );
};

export default PrivateDinnerExperiance;
