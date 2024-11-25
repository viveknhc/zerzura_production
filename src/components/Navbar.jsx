import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleNavContent = () => {
        setIsOpen(!isOpen);
    };

    const closeNav = () => {
        setIsOpen(false);
    };


    // Language Transilate
    const [isGTranslateReady, setIsGTranslateReady] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.gtranslate.net/widgets/latest/dwf.js';
        script.defer = true;
        script.onload = () => setIsGTranslateReady(true); // Set flag when script is loaded
        document.body.appendChild(script);

        window.gtranslateSettings = {
            default_language: "en",
            languages: ["en", "ar", "zh-CN", "zh-TW", "nl", "fr", "de", "iw", "ja", "pt", "ru", "es"],
            wrapper_selector: ".gtranslate_wrapper"
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const changeLanguage = (language) => {
        if (!isGTranslateReady) return; // Only change language if GTranslate is ready

        const event = new Event('change');
        const select = document.querySelector('.gtranslate_wrapper select');
        if (select) {
            select.value = language;
            select.dispatchEvent(event);
        }
    };

    return (
        <>
            <div className="nav-bar">
                <button className="toggle-btn" onClick={toggleNavContent}>
                    <img loading="lazy" className="img-fluid" src="/images/navbar/toggle-btn-open.png" alt="Open Button" />
                </button>

                <div className="logo-box">
                    <Link to="">
                        <img loading="lazy" src="/images/logo.png" alt="Logo" />
                    </Link>
                </div>

                <div className="contact-box">
                    <div className="gtranslate_wrapper"></div>
                    <select
           
                        defaultValue="en"
                        className="form-select"
                        onChange={(e) => changeLanguage(e.target.value)}>
                        <option  value="en">Eng(US)</option>
                        <option value="ar">Arabic</option>
                        <option value="zh-CN">Chinese (Simplified)</option>
                        <option value="zh-TW">Chinese (Simplified)</option>
                        <option value="nl">Dutch</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="iw">Hebrew</option>
                        <option value="ja">Japanese</option>
                        <option value="pt">Portuguese</option>
                        <option value="ru">Russian</option>
                        <option value="es">Spanish</option>
                    </select>

                    <Link to="/contact" className="btn-box" onClick={closeNav}>
                        <svg className='left-arrow' width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.3536 4.85355C19.5488 4.65829 19.5488 4.34171 19.3536 4.14645L16.1716 0.964466C15.9763 0.769204 15.6597 0.769204 15.4645 0.964466C15.2692 1.15973 15.2692 1.47631 15.4645 1.67157L18.2929 4.5L15.4645 7.32843C15.2692 7.52369 15.2692 7.84027 15.4645 8.03553C15.6597 8.2308 15.9763 8.2308 16.1716 8.03553L19.3536 4.85355ZM5 5H19V4H5V5ZM0.5 8.5V10.5H1.5V8.5H0.5ZM5 4C2.51472 4 0.5 6.01472 0.5 8.5H1.5C1.5 6.567 3.067 5 5 5V4Z" fill="#EFEFDF" />
                        </svg>
                        <p>Contact</p>
                        <svg className='right-arrow' width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.3536 4.85355C19.5488 4.65829 19.5488 4.34171 19.3536 4.14645L16.1716 0.964466C15.9763 0.769204 15.6597 0.769204 15.4645 0.964466C15.2692 1.15973 15.2692 1.47631 15.4645 1.67157L18.2929 4.5L15.4645 7.32843C15.2692 7.52369 15.2692 7.84027 15.4645 8.03553C15.6597 8.2308 15.9763 8.2308 16.1716 8.03553L19.3536 4.85355ZM5 5H19V4H5V5ZM0.5 8.5V10.5H1.5V8.5H0.5ZM5 4C2.51472 4 0.5 6.01472 0.5 8.5H1.5C1.5 6.567 3.067 5 5 5V4Z" fill="#EFEFDF" />
                        </svg>
                    </Link>
                </div>
            </div>

            <div className={`nav-content ${isOpen ? 'open' : ''}`}>
                <button className="toggle-btn-close" onClick={toggleNavContent}>
                    <img loading="lazy" className="img-fluid" src="/images/navbar/toggle-btn-close.png" alt="Close Button" />
                </button>

                <div className="content-box">
                    <ul className="nav-links">
                        <li>
                            <Link to="/" onClick={closeNav}>
                                Home
                            </Link>
                            <div className="goto-box">
                                <svg width="46" height="39" viewBox="0 0 46 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M40.4156 28.2902L9.89778 28.3949L9.64864 28.3958L9.64864 28.6449L9.64864 30.8682L9.64864 31.119L9.8995 31.1182L40.3968 31.0135L35.6336 35.7414C35.0999 36.2711 35.0967 37.1333 35.6265 37.667C36.1563 38.2007 37.0184 38.2039 37.5521 37.6741L44.6527 30.6261C45.1864 30.0964 45.1896 29.2342 44.6599 28.7005L37.6119 21.5999C37.0821 21.0662 36.22 21.063 35.6863 21.5928C35.1525 22.1225 35.1493 22.9847 35.6791 23.5184L40.4156 28.2902Z" fill="#9C5849" stroke="#9C5849" stroke-width="0.5" />
                                    <path d="M9.91831 31.1077H10.1683V30.8577V28.6636V28.4136H9.91831H8.72306C5.78878 28.4136 3.38579 26.0923 3.38579 23.1689V1.38379V1.13379H3.13579H1H0.75V1.38379V23.1689C0.75 27.5534 4.30435 31.1077 8.68886 31.1077H9.91831Z" fill="#9C5849" stroke="#9C5849" stroke-width="0.5" />
                                </svg>

                                <h4>Goto page</h4>
                            </div>
                        </li>
                        <li>
                            <Link to="/about" onClick={closeNav}>
                                About us
                            </Link>
                            <div className="goto-box">
                                <svg width="46" height="39" viewBox="0 0 46 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M40.4156 28.2902L9.89778 28.3949L9.64864 28.3958L9.64864 28.6449L9.64864 30.8682L9.64864 31.119L9.8995 31.1182L40.3968 31.0135L35.6336 35.7414C35.0999 36.2711 35.0967 37.1333 35.6265 37.667C36.1563 38.2007 37.0184 38.2039 37.5521 37.6741L44.6527 30.6261C45.1864 30.0964 45.1896 29.2342 44.6599 28.7005L37.6119 21.5999C37.0821 21.0662 36.22 21.063 35.6863 21.5928C35.1525 22.1225 35.1493 22.9847 35.6791 23.5184L40.4156 28.2902Z" fill="#9C5849" stroke="#9C5849" stroke-width="0.5" />
                                    <path d="M9.91831 31.1077H10.1683V30.8577V28.6636V28.4136H9.91831H8.72306C5.78878 28.4136 3.38579 26.0923 3.38579 23.1689V1.38379V1.13379H3.13579H1H0.75V1.38379V23.1689C0.75 27.5534 4.30435 31.1077 8.68886 31.1077H9.91831Z" fill="#9C5849" stroke="#9C5849" stroke-width="0.5" />
                                </svg>

                                <h4>Goto page</h4>
                            </div>
                        </li>
                        <li>
                            <a href='https://zerzuraexperiences.com/blogs' onClick={closeNav}>
                                Blog
                            </a>
                            <div className="goto-box">
                                <svg width="46" height="39" viewBox="0 0 46 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M40.4156 28.2902L9.89778 28.3949L9.64864 28.3958L9.64864 28.6449L9.64864 30.8682L9.64864 31.119L9.8995 31.1182L40.3968 31.0135L35.6336 35.7414C35.0999 36.2711 35.0967 37.1333 35.6265 37.667C36.1563 38.2007 37.0184 38.2039 37.5521 37.6741L44.6527 30.6261C45.1864 30.0964 45.1896 29.2342 44.6599 28.7005L37.6119 21.5999C37.0821 21.0662 36.22 21.063 35.6863 21.5928C35.1525 22.1225 35.1493 22.9847 35.6791 23.5184L40.4156 28.2902Z" fill="#9C5849" stroke="#9C5849" stroke-width="0.5" />
                                    <path d="M9.91831 31.1077H10.1683V30.8577V28.6636V28.4136H9.91831H8.72306C5.78878 28.4136 3.38579 26.0923 3.38579 23.1689V1.38379V1.13379H3.13579H1H0.75V1.38379V23.1689C0.75 27.5534 4.30435 31.1077 8.68886 31.1077H9.91831Z" fill="#9C5849" stroke="#9C5849" stroke-width="0.5" />
                                </svg>

                                <h4>Goto page</h4>
                            </div>
                        </li>
                        <li>
                            <Link to="/contact" onClick={closeNav}>
                                Contact us
                            </Link>
                            <div className="goto-box">
                                <svg width="46" height="39" viewBox="0 0 46 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M40.4156 28.2902L9.89778 28.3949L9.64864 28.3958L9.64864 28.6449L9.64864 30.8682L9.64864 31.119L9.8995 31.1182L40.3968 31.0135L35.6336 35.7414C35.0999 36.2711 35.0967 37.1333 35.6265 37.667C36.1563 38.2007 37.0184 38.2039 37.5521 37.6741L44.6527 30.6261C45.1864 30.0964 45.1896 29.2342 44.6599 28.7005L37.6119 21.5999C37.0821 21.0662 36.22 21.063 35.6863 21.5928C35.1525 22.1225 35.1493 22.9847 35.6791 23.5184L40.4156 28.2902Z" fill="#9C5849" stroke="#9C5849" stroke-width="0.5" />
                                    <path d="M9.91831 31.1077H10.1683V30.8577V28.6636V28.4136H9.91831H8.72306C5.78878 28.4136 3.38579 26.0923 3.38579 23.1689V1.38379V1.13379H3.13579H1H0.75V1.38379V23.1689C0.75 27.5534 4.30435 31.1077 8.68886 31.1077H9.91831Z" fill="#9C5849" stroke="#9C5849" stroke-width="0.5" />
                                </svg>

                                <h4>Goto page</h4>
                            </div>
                        </li>
                    </ul>

                    <div className="service-box-wrap">

                        <div className="service-box">
                            <Link to="/dune-buggy-experience" onClick={closeNav}>
                                <div className="row g-0">
                                    <div className="col-3">
                                        <div className="img-box">
                                            <img loading="lazy" className="img-fluid" src="/images/navbar/service1.png" alt="Service" />
                                        </div>
                                    </div>
                                    <div className="col-9">
                                        <div className="right">
                                            <h4>Dune Buggy Experience</h4>
                                            <p>Thrilling dune buggy safari in Dubai with packages to match your adventure level, transfer optional.</p>

                                            <div className="know-more-btn">
                                                KNOW MORE
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="service-box">
                            <Link to="/private-dinner-experience" onClick={closeNav}>
                                <div className="row g-0">
                                    <div className="col-3">
                                        <div className="img-box">
                                            <img loading="lazy" className="img-fluid" src="/images/navbar/service2.png" alt="Service" />
                                        </div>
                                    </div>
                                    <div className="col-9">
                                        <div className="right">
                                            <h4>Private Dinner Experience</h4>
                                            <p>Enjoy private dinner in the Mleiha desert Dubai, with options that include a dune buggy ride and desert safari.
                                            </p>
                                            <div className='know-more-btn'>

                                                KNOW MORE

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    </div>

                </div>
            </div >
        </>
    );
}
