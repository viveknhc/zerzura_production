import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function NavbarSecond() {
    return (

        <>
            <div className='navbar-second'>
                <nav>
                    <div className="container">
                        <div class="ruby-menu-demo-header">

                            <div class="ruby-wrapper">
                                <button class="c-hamburger c-hamburger--htx visible-xs">
                                    <span>toggle menu</span>
                                </button>
                                <ul class="ruby-menu">
                                    <li class="ruby-active-menu-item"><Link to="/">
                                        <img loading="lazy" className='img-fluid' src="/images/navbar/logo.png" alt="" /></Link></li>

                                    <li class="ruby-menu-mega"><a>Our Experiences</a>
                                        <div class="ruby-grid ruby-grid-lined">

                                            <div className="link-box">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <h3>
                                                            Lost in the sands, found in the moment.
                                                        </h3>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="right">
                                                            <ul>
                                                                <li>
                                                                    <Link to="/dune-buggy-experience">
                                                                        Dune buggy Experiences
                                                                    </Link>

                                                                </li>
                                                                <li>

                                                                    <Link to="/private-dinner-experience">
                                                                        Private Dining in the desert
                                                                    </Link>

                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>



                                        </div>
                                        <span class="ruby-dropdown-toggle"></span>
                                    </li>

                                    <li class="ruby-menu-mega"><Link to='/about'>About Us</Link>
                                        <div class="ruby-grid ruby-grid-lined">

                                            <div className="link-box">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <h3>
                                                            Lost in the sands, found in the moment.
                                                        </h3>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="right">
                                                            <ul>
                                                                <li>
                                                                    <Link to=''>Sustainability</Link>
                                                                </li>
                                                                <li>
                                                                    <a href='https://zerzuraexperiences.com/blogs/'>Blog</a>
                                                                </li>
                                                                <li>
                                                                    <a href='/#uniquesection'>What makes us unique</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <span class="ruby-dropdown-toggle"></span>
                                    </li>

                                    <li class="ruby-menu-item"><a href="https://explorerevents.ae/corporate-events-in-the-uae/">Events </a></li>
                                </ul>
                                <div className="right-box">

                                    <a href="https://www.instagram.com/zerzuraexperiences/">
                                        <img src="/images/navbar/insta.png" alt="" />

                                    </a>
                                    <a href="https://www.facebook.com/ExplorerToursUAE">
                                        <img src="/images/navbar/facebook.png" alt="" />

                                    </a>
                                    <a href="https://www.linkedin.com/company/explorer-tours-uae/">
                                        <img src="/images/navbar/linkedin.png" alt="" />

                                    </a>

                                    <p>En</p>
                                    <Link className='contact-btn-nav' to='/contact'>Contact Us</Link>
                                </div>

                            </div>
                        </div>
                    </div>


                </nav>
            </div>



            <div className='navbar-mob'>
                <nav class="navbar navbar-expand-lg">
                    <div class="container">
                        <Link class="navbar-brand" to="/">
                            <img loading="lazy" src="/images/navbar/logo.png" alt="" />
                        </Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            {/* <span class="navbar-toggler-icon"></span> */}
                            <img loading="lazy" className='hamburger img-fluid' src="/images/navbar/hamburger.png" alt="" />
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">


                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Our Experiences
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li> <Link className='dropdown-item' to="/dune-buggy-experience">
                                            Dune buggy Experiences
                                        </Link></li>

                                        <li>
                                            <Link className='dropdown-item' to="/private-dinner-experience">
                                                Private Dining in the desert
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        About Us
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <Link to=''>Sustainability</Link>
                                        </li>
                                        <li>
                                            <a href='https://zerzuraexperiences.com/blogs/'>Blog</a>
                                        </li>
                                        <li>
                                            <a href='/#uniquesection'>What makes us unique</a>
                                        </li>

                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link " aria-current="page" href="https://explorerevents.ae/corporate-events-in-the-uae/">Events</a>
                                </li>
                            </ul>
                            <div class="d-flex" role="search">

                                <Link className='contact-btn-mb' to='/' type="submit">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        </>






    )
}
