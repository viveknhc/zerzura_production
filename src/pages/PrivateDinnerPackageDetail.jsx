import React,{useState} from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { useParams } from "react-router-dom";
import dataPackage from '../Data/dataPackage.json'
import { Link } from 'react-router-dom';
import PackageTestimonial from '../components/PackageTestimonial';
import Unique from '../components/Unique';

// Utility function to create a slug from a string
const slugify = (text) => {
    return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
};



export default function PrivateDinnerPackageDetail() {
    const [mainImage, setMainImage] = useState('/images/package/steps/step1.png');

    const { slug } = useParams();
    const item = dataPackage.private_dinner.find(pkg => slugify(pkg.title) === slug);
    if (!item) {
        return <h2>Package not found</h2>;
    }

    const [PrivateDinnermainImage, setPrivateDinnermainImage] = useState('/images/package/steps/step1.png');

    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const handleVideoLoaded = () => {
      setIsVideoLoaded(true);
    };


    return (
        <>
               <section>
                <div className="video-banner">
                    {!isVideoLoaded && (
                        <img
                            src="/images/about/about1-latest.png"
                            alt="Video Placeholder"
                            className="video-placeholder"
                            loading="lazy"
                        />
                    )}

                    <video
                        src="/images/home/zerzura_website-premo.mp4"
                        autoPlay
                        muted
                        playsinline
                        loop
                        onLoadedData={handleVideoLoaded}
                        style={{ display: isVideoLoaded ? "block" : "none" }}
                    ></video>

                    <div className="container">
                        <div className="content-box">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className='deatil-feature'>
                <div className="container">
                    <div className="price-heading">
                        <h2>
                            {item.price}
                        </h2>
                    </div>
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

                    <div className="content-box">
                        <div className="card">
                            <div className="img-wrap">

                                <img loading="lazy" className='img-fluid' src="/images/package/pachage-feature1.png" alt="" />
                            </div>
                            <p>
                                Multinational Team of Experienced Guides
                            </p>
                        </div>

                        <div className="card">
                            <div className="img-wrap">

                                <img loading="lazy" className='img-fluid' src="/images/package/pachage-feature2.png" alt="" />
                            </div>
                            <p>
                                Customized Buggies for Safety & Performance
                            </p>
                        </div>

                        <div className="card">
                            <div className="img-wrap">

                                <img loading="lazy" className='img-fluid' src="/images/package/pachage-feature3.png" alt="" />
                            </div>
                            <p>
                                Exclusive Operator in Mleiha National Park
                            </p>
                        </div>

                        <div className="card">
                            <div className="img-wrap">

                                <img loading="lazy" className='img-fluid' src="/images/package/pachage-feature4.png" alt="" />
                            </div>
                            <p>
                                First Aid Certified Staff
                            </p>
                        </div>

                        <div className="card">
                            <div className="img-wrap">

                                <img loading="lazy" className='img-fluid' src="/images/package/pachage-feature5.png" alt="" />
                            </div>
                            <p>
                                Helmets & Goggles Mandatory -Provided by us
                            </p>
                        </div>

                        <div className="card">
                            <div className="img-wrap">

                                <img loading="lazy" className='img-fluid' src="/images/package/pachage-feature6.png" alt="" />
                            </div>
                            <p>
                                Infused Water & Fruit Juices Provided
                            </p>
                        </div>

                        <div className="card">
                            <div className="img-wrap">

                                <img loading="lazy" className='img-fluid' src="/images/package/pachage-feature7.png" alt="" />
                            </div>
                            <p>
                                Camel Trekking Included in all Tours
                            </p>
                        </div>

                        <div className="card">
                            <div className="img-wrap">

                                <img loading="lazy" className='img-fluid' src="/images/package/pachage-feature8.png" alt="" />
                            </div>
                            <p>
                                Sandboarding Included in all Tours
                            </p>
                        </div>


                    </div>
                </div>
            </section>


            <section className='detail-desc'>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="left">
                                <div className="heading-box">
                                    <h2>
                                        Embark on an Unforgettable Dune Buggy Safari exploring the ancient wonders of Mleiha National park
                                    </h2>
                                </div>

                                <div className="content-box">
                                    <p>
                                        Welcome to Zerzura Experiences – a place where the untamed beauty of the Mleiha Desert meets the pinnacle of bespoke luxury. We are more than just an adventure provider; we are your gateway to exploring the rich heritage, pristine landscapes, and extraordinary stories hidden within the desert sands of Mleiha National Park. </p> <p>
                                        As the exclusive operators within this UNESCO-nominated world heritage site, Zerzura Experiences curates journeys that go beyond ordinary excursions, offering intimate encounters with nature, history, and culture. Our carefully designed experiences provide a seamless blend of excitement and discovery—whether it’s traversing the mesmerizing dunes in our custom-built buggies, embarking on guided archaeological tours to uncover ancient secrets, or indulging in private dining under the starlit desert sky.</p> <p>
                                        From the moment you arrive, we immerse you in the magic of the desert, where each experience is tailored to reveal the diverse wonders of Mleiha. Discover the thrill of the ride, the serenity of sunset vistas, and the stories of long-lost civilizations, all meticulously woven into a journey that leaves you with lifelong memories.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="right">
                                <div className="box">
                                    <h4>Prices starting from AED 1500</h4>
                                    <p>
                                        Lock in your Ultimate Desert experience now.
                                    </p>

                                    <div className="button-row">

                                        <Link to="/contact" className='book-now'>
                                            <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.9734 4.21642C16.1378 4.01475 16.1378 3.68777 15.9734 3.4861L13.2938 0.199597C13.1294 -0.00207908 12.8627 -0.00207908 12.6984 0.199597C12.5339 0.401272 12.5339 0.728254 12.6984 0.929926L15.0802 3.85126L12.6984 6.7726C12.5339 6.97427 12.5339 7.30125 12.6984 7.50292C12.8627 7.70461 13.1294 7.70461 13.2938 7.50292L15.9734 4.21642ZM3.88615 4.36768H15.6756V3.33484H3.88615V4.36768ZM0.0966797 7.98265V10.0483H0.938785V7.98265H0.0966797ZM3.88615 3.33484C1.79329 3.33484 0.0966797 5.41573 0.0966797 7.98265H0.938785C0.938785 5.98615 2.25836 4.36768 3.88615 4.36768V3.33484Z" fill="#EFEFDF" />
                                            </svg>

                                            <p>BOOK NOW</p>
                                        </Link>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className='experience'>
                <div className="container">

                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6">
                            <div className="left">
                                <h2>Experience</h2>
                                <p>Itinerary</p>

                                <div className="content-box">

                                    <div className="step-item dotted" onMouseEnter={() => setMainImage('/images/package/steps/step2.png')}>

                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="30" viewBox="0 0 22 30" fill="none">
                                                <path d="M10.875 0.59668C4.86883 0.59668 0 5.46551 0 11.4717C0 14.0445 1.13372 16.307 2.38842 18.2686L10.1355 29.2142C10.3054 29.4544 10.5814 29.5967 10.875 29.5967C11.1686 29.5967 11.4446 29.4544 11.6145 29.2142L19.3616 18.2686C20.5605 16.6545 21.75 14.0445 21.75 11.4717C21.75 5.46551 16.8812 0.59668 10.875 0.59668ZM18.1644 18.2686H18.1599L10.875 28.2373L3.59011 18.2686H3.58558C2.47814 16.6686 0.90625 14.0994 0.90625 11.4717C0.90625 5.96621 5.36953 1.50293 10.875 1.50293C16.3805 1.50293 20.8438 5.96621 20.8438 11.4717C20.8438 14.0994 19.1586 16.8099 18.1644 18.2686Z" fill="white" />
                                                <path d="M10.875 6.94043C8.37239 6.94043 6.34375 8.96952 6.34375 11.4717C6.34375 13.9738 8.37239 16.0029 10.875 16.0029C13.3776 16.0029 15.4062 13.9738 15.4062 11.4717C15.4062 8.96952 13.3776 6.94043 10.875 6.94043ZM10.875 15.0967C8.87309 15.0967 7.25 13.4736 7.25 11.4717C7.25 9.46977 8.87309 7.84668 10.875 7.84668C12.8769 7.84668 14.5 9.46977 14.5 11.4717C14.5 13.4736 12.8769 15.0967 10.875 15.0967Z" fill="white" />
                                                <path d="M10.875 5.12793C7.37144 5.12793 4.53125 7.96812 4.53125 11.4717C4.53125 14.9752 7.37144 17.8154 10.875 17.8154C14.3786 17.8154 17.2188 14.9752 17.2188 11.4717C17.2188 7.96812 14.3786 5.12793 10.875 5.12793ZM10.875 16.9092C7.87214 16.9092 5.4375 14.4745 5.4375 11.4717C5.4375 8.46882 7.87214 6.03418 10.875 6.03418C13.8779 6.03418 16.3125 8.46882 16.3125 11.4717C16.3125 14.4745 13.8779 16.9092 10.875 16.9092Z" fill="white" />
                                            </svg>
                                        </div>

                                        <div className="step-content-box">
                                            <h4>Pickup Location:</h4>
                                            <p>Dubai</p>

                                        </div>

                                        <img loading="lazy"
                                            src="/images/package/steps/step2.png"
                                            alt="Professional"
                                            className="d-none"
                                        />

                                    </div>

                                    <div className="step-item dotted" onMouseEnter={() => setMainImage('/images/package/steps/step1.png')}>

                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                                <path d="M13.5 0.59668C13.5 7.50024 19.0964 13.0967 26 13.0967C19.0964 13.0967 13.5 18.6931 13.5 25.5967C13.5 18.6931 7.90356 13.0967 1 13.0967C7.90356 13.0967 13.5 7.50024 13.5 0.59668Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>

                                        <div className="step-content-box">
                                            <h4>Car</h4>
                                            <p>(1 Hour)</p>

                                        </div>

                                        <img loading="lazy"
                                            src="/images/package/steps/step1.png"
                                            alt="Professional"
                                            className="d-none"
                                        />

                                    </div>

                                    <div className="step-item" onMouseEnter={() => setMainImage('/images/package/steps/step3.png')}>

                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                                <path d="M13.5 0.59668C13.5 7.50024 19.0964 13.0967 26 13.0967C19.0964 13.0967 13.5 18.6931 13.5 25.5967C13.5 18.6931 7.90356 13.0967 1 13.0967C7.90356 13.0967 13.5 7.50024 13.5 0.59668Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>

                                        <div className="step-content-box">
                                            <h4>Zerzura</h4>
                                            <p>Safety briefing, Welcome refreshments ( 30 minutes)</p>

                                        </div>

                                        <img loading="lazy"
                                            src="/images/package/steps/step3.png"
                                            alt="Professional"
                                            className="d-none"
                                        />

                                    </div>

                                    <div className="step-item" onMouseEnter={() => setMainImage('/images/package/steps/step4.png')}>

                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                                <path d="M13.5 0.59668C13.5 7.50024 19.0964 13.0967 26 13.0967C19.0964 13.0967 13.5 18.6931 13.5 25.5967C13.5 18.6931 7.90356 13.0967 1 13.0967C7.90356 13.0967 13.5 7.50024 13.5 0.59668Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>

                                        <div className="step-content-box">

                                            <h4>Mleiha Desert</h4>
                                            <p>Off-road adventure (1.5 hours)</p>

                                        </div>

                                        <div className="spaced-text-box">
                                            <div className="row">
                                                <div className="col-2">
                                                    <div className="circle">

                                                    </div>
                                                </div>
                                                <div className="col-10">
                                                    <h4>Sand Boarding at camel rock</h4>
                                                    <p>Sandboarding (Optional)</p>
                                                </div>
                                            </div>

                                        </div>

                                        <img loading="lazy"
                                            src="/images/package/steps/step4.png"
                                            alt="Professional"
                                            className="d-none"
                                        />

                                    </div>

                                    <div className="step-item" onMouseEnter={() => setMainImage('/images/package/steps/step5.png')}>

                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                                <path d="M13.5 0.59668C13.5 7.50024 19.0964 13.0967 26 13.0967C19.0964 13.0967 13.5 18.6931 13.5 25.5967C13.5 18.6931 7.90356 13.0967 1 13.0967C7.90356 13.0967 13.5 7.50024 13.5 0.59668Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>

                                        <div className="step-content-box">
                                            <h4>Fossil Rock</h4>
                                            <p>Photo stop(15 minutes)</p>

                                        </div>

                                        <img loading="lazy"
                                            src="/images/package/steps/step5.png"
                                            alt="Professional"
                                            className="d-none"
                                        />

                                    </div>

                                    <div className="step-item" onMouseEnter={() => setMainImage('/images/package/steps/step6.png')}>

                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                                <path d="M13.5 0.59668C13.5 7.50024 19.0964 13.0967 26 13.0967C19.0964 13.0967 13.5 18.6931 13.5 25.5967C13.5 18.6931 7.90356 13.0967 1 13.0967C7.90356 13.0967 13.5 7.50024 13.5 0.59668Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>

                                        <div className="step-content-box">
                                            <h4>Zerzura</h4>
                                            <p>Break time</p>

                                        </div>

                                        <img loading="lazy"
                                            src="/images/package/steps/step6.png"
                                            alt="Professional"
                                            className="d-none"
                                        />

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right">
                                <div className="img-box">
                                    <img loading="lazy" className='img-fluid' id="main_img" src={mainImage} alt="Main display" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>



            {/* <Unique /> */}
            <PackageTestimonial />


        </>
    )
}
