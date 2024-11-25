import React, { useEffect } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import PreviewVideo from '../components/PreviewVideo';

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {


    return (
        <>

            <div className="about-banner">
                <div className="container">
                    <h1>
                        Discover Zerzura – Your Gateway to the Mleiha Desert
                    </h1>
                </div>
            </div>

            <section className='about-description' data-scroll-section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="heading-box">
                                <h2>About Us</h2>
                            </div>

                            <div className="content-box">
                                <p>Welcome to Zerzura Experiences – a place where the untamed beauty of the Mleiha Desert meets the pinnacle of bespoke luxury. We are more than just an adventure provider; we are your gateway to exploring the rich heritage, pristine landscapes, and extraordinary stories hidden within the desert sands of Mleiha National Park.
                                    As the exclusive operators within this UNESCO-nominated world heritage site, Zerzura Experiences curates journeys that go beyond ordinary excursions, offering intimate encounters with nature, history, and culture. Our carefully designed experiences provide a seamless blend of excitement and discovery—whether it’s traversing the mesmerizing dunes in our custom-built buggies, embarking on guided archaeological tours to uncover ancient secrets, or indulging in private dining under the starlit desert sky.
                                    From the moment you arrive, we immerse you in the magic of the desert, where each experience is tailored to reveal the diverse wonders of Mleiha. Discover the thrill of the ride, the serenity of sunset vistas, and the stories of long-lost civilizations, all meticulously woven into a journey that leaves you with lifelong memories.

                                </p>

                            </div>

                        </div>

                        <div className="col-lg-4">

                        </div>


                    </div>
                </div>
            </section>

            <section className='mission-vission'>
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="left heading-box ">
                                <h2>
                                    Mission
                                </h2>
                                <p>
                                    Our mission is to create unparalleled desert experiences that celebrate the natural beauty and historical significance of Mleiha. By combining authentic encounters, personalized services, and a deep respect for the environment, we aim to craft memorable moments that inspire our guests to see the desert in a new light—one that is as thrilling as it is enriching.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right heading-box ">
                                <h2>
                                    Vision
                                </h2>

                                <p>
                                    To redefine luxury desert experiences in the UAE by offering transformative journeys that connect our guests to the heart of the desert. We strive to set the benchmark for sustainable and immersive tourism, elevating Mleiha National Park as a premier destination for those seeking both adventure and cultural enrichment.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className='why-choose'>
                <div className="container">
                    <div className="heading-box">
                        <h2>
                            Why Choose Us?
                        </h2>
                    </div>
                    <div className="content-box">
                        <div className="col-lg-8">
                            <ul>
                                <li>
                                    <p>
                                        <span>More Than a Ride, an Immersive Experience:</span>Our dune buggies serve as a thrilling introduction to the Mleiha Desert’s captivating landscapes, but they are just the beginning. Every journey is curated to include elements of exploration, education, and relaxation, making Zerzura a holistic desert experience unlike any other.
                                    </p>

                                </li>

                                <li>
                                    <p>
                                        <span>Exclusive Access to Mleiha National Park:</span>Gain unparalleled access to one of the UAE’s most protected and culturally significant areas. Our routes take you through untouched parts of the desert, where ancient tombs, fossils, and wildlife coexist, revealing a side of the desert few have witnessed.
                                    </p>

                                </li>

                                <li>
                                    <p>
                                        <span>History Comes Alive:</span>Dive deep into the heritage of the desert with our guided archaeological tours. Walk through history as our knowledgeable guides recount stories of the people and civilizations that once thrived here, complemented by viewing 80-million-year-old marine fossils and artifacts from the Neolithic and Paleolithic periods.
                                    </p>

                                </li>

                                <li>
                                    <p>
                                        <span>Gourmet Dining Under the Stars:</span>Elevate your experience with our private desert dining setups, where every detail is crafted for your comfort and enjoyment. Savor gourmet meals prepared to perfection, all while soaking in the tranquility of the vast desert under a canopy of stars.
                                    </p>

                                </li>

                                <li>
                                    <p>
                                        <span>A Commitment to Conservation and Sustainability:</span>We operate with a deep sense of responsibility toward preserving the unique environment and heritage of Mleiha. Our experiences are designed to engage guests in meaningful ways while ensuring minimal impact on the natural surroundings.
                                    </p>

                                </li>

                                <li>
                                    <p>
                                        <span>Personalized Journeys for Every Explorer:</span>Whether you’re seeking adventure, serenity, or cultural discovery, we customize each journey to your preferences, ensuring that your time with us is as unique as it is unforgettable.
                                    </p>

                                </li>


                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            <section className='specification1'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-10">
                            <div className="heading-box">
                                <h2>
                                    How We Are Different from Other Operators in Dubai
                                </h2>
                            </div>

                            <div className="content-box">
                                <p>
                                    Unlike typical dune buggy operators in Dubai, Zerzura Experiences offers a journey that goes beyond the thrill of dune riding. We are located within the protected Mleiha National Park, an area rich in archaeological significance and natural beauty, where every experience is carefully crafted to provide a deeper connection with the environment.
                                    While many operators in Dubai focus solely on high-speed dune bashing, our approach emphasizes a harmonious blend of adventure, history, and luxury. Our guides are not just experts in navigating the desert terrain—they are passionate storytellers, providing insights into the region’s ancient civilizations and the geological wonders that define Mleiha. This distinct focus allows our guests to experience the desert in a way that is both exhilarating and enriching, making Zerzura a unique alternative for those seeking more than just a typical dune buggy tour in Dubai.
                                    Our exclusivity within Mleiha National Park also means that guests can explore off-the-beaten-track routes, access archaeological sites, and enjoy complete privacy without the hustle of crowded tourist spots. The result is an intimate and authentic desert journey that sets us apart from other operators.

                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            <section className='specification2'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10">
                            <div className="heading-box">
                                <h2>
                                    Proximity to Dubai: Your Ideal Escape Just 40 Minutes Away

                                </h2>
                            </div>

                            <div className="content-box">
                                <p>
                                    Located just a 40-minute drive from Dubai, Zerzura Experiences offers an easily accessible yet completely unique dune buggy experience near Dubai. Our proximity makes us the perfect choice for those looking to escape the city and immerse themselves in the tranquility of the Mleiha Desert.
                                    Whether you’re a resident or a tourist, the short drive allows you to seamlessly transition from the bustling metropolis of Dubai to the serene expanses of the desert, where every dune holds a story waiting to be discovered. This closeness to the city means you can easily fit a half-day or full-day adventure into your itinerary, experiencing the magic of Mleiha without the need for extensive travel.
                                    Book your dune buggy Dubai experience with us and discover why Zerzura is the go-to destination for those seeking a luxurious, culturally rich, and adventure-filled escape from the ordinary.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-2"></div>

                    </div>

                </div>

            </section>

        </>
    )
}
