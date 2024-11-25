import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container-fluid">
                    <div className="top-section">
                        <div className="row">
                            <div className="col-lg-3">

                                <div className="link-item">
                                    <h4>NewsLetter</h4>
                                    <div className="input-box">
                                        <input type="text" placeholder='Enter Your Email' />
                                        <svg width="71" height="34" viewBox="0 0 71 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="71" height="34" fill="#EFEFDF" />
                                            <path d="M52.7071 17.7071C53.0976 17.3166 53.0976 16.6834 52.7071 16.2929L46.3431 9.92893C45.9526 9.53841 45.3195 9.53841 44.9289 9.92893C44.5384 10.3195 44.5384 10.9526 44.9289 11.3431L50.5858 17L44.9289 22.6569C44.5384 23.0474 44.5384 23.6805 44.9289 24.0711C45.3195 24.4616 45.9526 24.4616 46.3431 24.0711L52.7071 17.7071ZM18 18L52 18V16L18 16V18Z" fill="#534741" />
                                        </svg>


                                    </div>
                                </div>


                                <p>By subscribing you agree with our <Link to="/privacy-policy" className='privacy-link'>Privacy Policy</Link>     </p>
                            </div>

                            <div className="col-lg-3">
                                <div className="master-card">

                                    <a href="">
                                        <img loading="lazy" src="/images/visa-card.png" className='img-fluid' alt="" />
                                    </a>

                                    <a href="">
                                        <img loading="lazy" src="/images/master-card.png" className='img-fluid' alt="" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="link-item-box">
                                    <div className="row">


                                        <div className="col-lg-4">
                                            <div className="link-item">
                                                <h4>
                                                    Experiences
                                                </h4>

                                                <ul>
                                                    <li>

                                                        <Link to="/dune-buggy-experience"> Dune Buggy Experience</Link>


                                                    </li>
                                                    <li>
                                                        <Link to="/private-dinner-experience">Private Dinner Experience</Link>

                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-lg-5">
                                            <div className="link-item">
                                                <h4>
                                                    Corporate Activities
                                                </h4>

                                                <ul>
                                                    <li>
                                                        <a href="https://explorerevents.ae/">
                                                            Team Building
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://explorerevents.ae/csr-activities/">
                                                            CSR
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="https://explorerevents.ae/corporate-events-in-the-uae/">
                                                            Corporate Events
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-lg-3">
                                            <div className="link-item">
                                                <h4>
                                                    Extra
                                                </h4>

                                                <ul>
                                                    <li>
                                                        <Link to='/about'>
                                                            About Us
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <a href="https://zerzuraexperiences.com/blogs">
                                                            Blogs
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <Link to="/privacy-policy">
                                                            Privacy Policy
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link to="/terms-and-conditions">
                                                            Terms & Conditions
                                                        </Link>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <svg width="" height="7" viewBox="0 0 1686 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.113249 3.67969L3 6.56644L5.88675 3.67969L3 0.792936L0.113249 3.67969ZM1685.89 3.67969L1683 0.792936L1680.11 3.67969L1683 6.56644L1685.89 3.67969ZM3 4.17969H1683V3.17969H3V4.17969Z" fill="#EFEFDF" />
                    </svg>

                    <div className="mid-section">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="item">
                                    <a href="tel:+97145649959">PHONE NO : <span>+97145649959
                                    </span></a>
                                    <svg className='lg' width="6" height="90" viewBox="0 0 6 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 0.792936L0.113249 3.67969L3 6.56644L5.88675 3.67969L3 0.792936ZM3 89.0664L5.88675 86.1797L3 83.2929L0.113249 86.1797L3 89.0664ZM2.5 3.67969V86.1797H3.5V3.67969H2.5Z" fill="#EFEFDF" />
                                    </svg>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="item">
                                    <a className='whatsapp' href="https://wa.me/971529108567">WHATSAPP  : <span>+971529108567
                                    </span> </a>
                                    <svg className='lg' width="6" height="90" viewBox="0 0 6 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 0.792936L0.113249 3.67969L3 6.56644L5.88675 3.67969L3 0.792936ZM3 89.0664L5.88675 86.1797L3 83.2929L0.113249 86.1797L3 89.0664ZM2.5 3.67969V86.1797H3.5V3.67969H2.5Z" fill="#EFEFDF" />
                                    </svg>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="item">
                                    <a href="mailto:info@zerzuraexperiences.com">EMAIL : <span>info@zerzuraexperiences.com
                                    </span> </a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <svg width="" height="7" viewBox="0 0 1686 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.113249 3.67969L3 6.56644L5.88675 3.67969L3 0.792936L0.113249 3.67969ZM1685.89 3.67969L1683 0.792936L1680.11 3.67969L1683 6.56644L1685.89 3.67969ZM3 4.17969H1683V3.17969H3V4.17969Z" fill="#EFEFDF" />
                    </svg>

                    <div className="name-show">
                        <img loading="lazy" className='img-fluid' src="/images/footer-logo.png" alt="" />
                    </div>

                    <svg width="" height="7" viewBox="0 0 1686 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.113249 3.67969L3 6.56644L5.88675 3.67969L3 0.792936L0.113249 3.67969ZM1685.89 3.67969L1683 0.792936L1680.11 3.67969L1683 6.56644L1685.89 3.67969ZM3 4.17969H1683V3.17969H3V4.17969Z" fill="#EFEFDF" />
                    </svg>


                    <div className="footer-bottom">
                        <p className='copyright'>2024 copyright</p>

                        <div className="social-icon">
                            <a target='blank' href="https://www.facebook.com/ExplorerToursUAE">
                                <img loading="lazy" className='img-fluid' src="/images/social-icon1.png" alt="" />
                            </a>

                            <a target='blank' href="https://www.instagram.com/zerzuraexperiences/">
                                <img loading="lazy" className='img-fluid' src="/images/social-icon2.png" alt="" />
                            </a>

                            <a target='blank' href="https://www.linkedin.com/company/explorer-tours-uae/">
                                <img loading="lazy" className='img-fluid' src="/images/social-icon3.png" alt="" />
                            </a>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}
