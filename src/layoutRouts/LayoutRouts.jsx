import React, { useEffect, useRef } from 'react'
import Home from '../pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer';
import ContactUs from '../pages/ContactUs';
import AboutUs from '../pages/AboutUs';
import RefreshToTop from '../customHook/RefreshToTop.jsx';
import MouseStalker from '../components/MouseStalker.jsx';
import DuneBuggyExperience from '../pages/DuneBuggyExperience.jsx';
import PrivateDinnerExperiance from '../pages/PrivateDinnerExperiance.jsx';
import PrivateDinnerExperianceNew from '../pages/PrivateDinnerExperianceNew.jsx';
import DuneBuggyExperienceNew from '../pages/DuneBuggyExperienceNew.jsx';
import DuneBuggyPackageDetail from '../pages/DuneBuggyPackageDetail.jsx';
import PrivacyPolicy from '../pages/PrivacyPolicy.jsx';
import TermsCondition from '../pages/TermsCondition.jsx';
import Enquire from '../pages/Enquire.jsx';
import Blog from '../pages/Blog.jsx';
import BlogSingle from '../pages/BlogSingle.jsx';
import BookingPage from '../pages/BookingPage.jsx';
import Thankyou from '../pages/Thankyou.jsx';
import Preloader from '../components/Preloader.jsx';
import EnquireBtn from '../components/EnquireBtn.jsx';
import Error404 from '../pages/Error404.jsx';
import TestHome from '../pages/TestHome.jsx';
import PrivateDinnerPackageDetail from '../pages/PrivateDinnerPackageDetail.jsx';
import NavbarSecond from '../components/NavbarSecond.jsx';


export default function LayoutRouts() {
  const scrollRef = useRef(null);

  useEffect(() => {
    let locomotiveScroll;
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

    })();

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <>
      <Router>


        <EnquireBtn></EnquireBtn>
        <MouseStalker />
        <RefreshToTop />
        <Preloader />
        <NavbarSecond/>
        <Routes>
          <Route path='*' element={<Error404 />} />
          <Route path='/' element={<Home />} />
          {/* <Route path='/' element={<TestHome />} /> */}
          <Route path='contact/' element={<ContactUs />} />
          <Route path='about/' element={<AboutUs />} />
          <Route path='private-dinner-experience-old/' element={<PrivateDinnerExperiance />} />
          <Route path='dune-buggy-experience-old/' element={<DuneBuggyExperience />} />
          <Route path='privacy-policy/' element={<PrivacyPolicy />} />
          <Route path='terms-and-conditions/' element={<TermsCondition />} />
          <Route path='blog/' element={<Blog />} />
          <Route path='enquire/' element={<Enquire />} />
          <Route path='blog-single/' element={<BlogSingle />} />
          <Route path='booking-page/' element={<BookingPage />} />
          <Route path='thankyou-page/' element={<Thankyou />} />
          <Route path="private-dinner-experience/" element={<PrivateDinnerExperianceNew />} />
          <Route path="private-dinner-experience/:slug/" element={<PrivateDinnerPackageDetail />} />
          <Route path="dune-buggy-experience/" element={<DuneBuggyExperienceNew />} />
          <Route path="dune-buggy-experience/:slug/" element={<DuneBuggyPackageDetail />} />
        </Routes>

        <Footer />
      </Router>
    </>


  );
}
