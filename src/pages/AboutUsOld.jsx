import React, { useEffect } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import PreviewVideo from '../components/PreviewVideo';

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsOld() {

    useEffect(() => {
        ScrollTrigger.matchMedia({
            "(min-width: 1440px)": function () {
                gsap.to("#aboutBannerImg", {
                    width: "100%",
                    borderRadius: 0,
                    scrollTrigger: {
                        trigger: "#aboutBannerImg",
                        scrub: 2,
                        start: "top 30%",
                        end: "bottom 50%",
                        
                    }
                });

                gsap.to("#aboutBanner h2", {
                    y: 200,
                    color: '#fff',
                    scrollTrigger: {
                        trigger: "#aboutBanner h2",
                        scrub: 1,
                        start: "30% 10%",
                        end: "90% 90%",
                        ease: "power1.out",
                      
                    }
                });
            },

            // Desktop - large screens
            "(min-width: 999px)": function () {
                gsap.to("#aboutBannerImg", {
                    width: "100%",
                    borderRadius: 0,
                    scrollTrigger: {
                        trigger: "#aboutBannerImg",
                        scrub: 2,
                        start: "top 50%",
                        end: "bottom 50%",
                       
                    }
                });

                gsap.to("#aboutBanner h2", {
                    y: 200,
                    color: '#fff',
                    scrollTrigger: {
                        trigger: "#aboutBanner h2",
                        scrub: 1,
                        start: "40% 50%",
                        end: "60% 70%",
                        ease: "power1.out",
                    }
                });
            },


            "(min-width: 767px)": function () {
                gsap.to("#aboutBannerImg", {
                    width: "100%",
                    borderRadius: 0,
                    scrollTrigger: {
                        trigger: "#aboutBannerImg",
                        scrub: 2,
                        start: "top 50%",
                        end: "bottom 50%",
                        
                    }
                });

                gsap.to("#aboutBanner h2", {
                    y: 200,
                    color: '#fff',
                    scrollTrigger: {
                        trigger: "#aboutBanner h2",
                        scrub: 1,
                        start: "40% 50%",
                        end: "60% 70%",
                        ease: "power1.out",
                    }
                });
            },

            // Tablet and below
            // "(max-width: 1199px)": function() {
            //     gsap.to("#aboutBannerImg", {
            //         width: "100%",
            //         borderRadius: 0,
            //         scrollTrigger: {
            //             trigger: "#aboutBannerImg",
            //             scrub: 1,
            //             start: "top 50%",
            //             end: "bottom 50%",
            //         }
            //     });

            //     gsap.to("#aboutBanner h2", {
            //         y: 100,
            //         color: '#fff',
            //         scrollTrigger: {
            //             trigger: "#aboutBanner h2",
            //             scrub: 1,
            //             start: "40% 40%",
            //             end: "60% 60%",
            //             ease: "power1.out",
            //         }
            //     });
            // }
        });

        // Clean up the ScrollTrigger instances on unmount
        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    }, []);


    return (
        <>
            <section className='about-banner' id='aboutBanner' data-scroll-section>
                <div className="container-fluid">
                    <div className="content-box">
                        <div className="heading-box" id='heading'>
                            <h2>ZERZURA</h2>
                        </div>

                        <div className="about-banner-img" id='aboutBannerImg'>

                        </div>
                    </div>
                </div>


                <div className="container">
                    <p>Welcome to Zerzura, where luxury seamlessly intertwines with the enchanting beauty of Mleiha Desert.
                        Our passionate team, driven by a deep understanding of Mleiha’s rich history, crafts personalized experiences for both
                        adventure-seekers and those seeking moments of tranquility. Explore the archaeological sites, uncovering the secrets of
                        ancient civilizations, and embark on the thrill of discovering real-life fossils. Whether it’s the excitement of dune
                        buggy tours, the intimacy of exclusive private dining, or tailor-made adventures beneath the expansive desert sky,
                        Zerzura redefines luxury with meticulous attention to detail, promising an extraordinary journey that surpasses
                        expectations. Choose us for an unparalleled blend of opulence and discovery in the captivating Mleiha Desert.</p>
                </div>
            </section>


            <section className='discover' data-scroll-section>

                <div className="container-fluid">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="img-wrap">
                                <div className="auto-change-img">

                                <img loading="lazy" className='img-fluid' src="/images/about/about1-latest.png" alt="" />
                                </div>
                                
                            </div>

                            <div className="heading-box">
                                <h2>Discover Zerzura - Your Gateway to the Mleiha Desert</h2>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="right">
                            <div className="auto-change-img">
                                <img loading="lazy" className='img-fluid' data-scroll  data-scroll-speed="0.5" src="/images/about/discover.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            <section className='about-description' data-scroll-section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5">

                        </div>

                        <div className="col-lg-7">
                            <div className="heading-box">
                                <h2>About Us</h2>
                            </div>

                            <div className="content-box">
                                <p>Enjoy the thrill and excitement of riding a dune buggy through the Mleiha desert. With each turn, you’ll discover the beauty and vastness of the sandy dunes and rugged terrain. The experience offers stunning views of the endless desert landscape, creating a perfect blend of adventure and scenery. It’s an unforgettable journey, ideal for both thrill-seekers and those who appreciate the wonders of nature.
                                </p>

                                <img loading="lazy" className='img-fluid' src="/images/home/explore-icon3.png" alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <PreviewVideo />

            <section className='vision' data-scroll-section>
                <div className="container-fluid">
                    <div className="heading-box">
                        <h2>Vision</h2>
                    </div>
                    <div className="content-box">
                        <div className="row">
                            <div className="col-lg-7">
                                <p>Enjoy the thrill and excitement of riding a dune buggy through the Mleiha desert. With each turn, you’ll discover the beauty and vastness of the sandy dunes and rugged terrain. The experience offers stunning views of the endless desert landscape, creating a perfect blend of adventure and scenery. It’s an unforgettable journey, ideal for both thrill-seekers and those who appreciate the wonders of nature.</p>
                            </div>

                        </div>
                    </div>

                    <div className="img-row-box">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="left">
                                    <div className="img-wrap">
                                    <div className="auto-change-img">
                                        <img loading="lazy" data-scroll  data-scroll-speed="0.5" className='img-fluid' src="/images/about/vision2.png" alt="" />
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="right">
                                    <div className="img-wrap">
                                    <div className="auto-change-img">
                                        <img loading="lazy" data-scroll  data-scroll-speed="0.5" className='img-fluid' src="/images/about/vision4.png" alt="" />
                                    </div></div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
