import React from 'react'
import dataPackage from '../Data/dataPackage.json'
import { Link } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion';

const slugify = (text) => {
    return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
};

export default function DuneBuggyExperienceNew() {

    const dune_buggy_packages = dataPackage.dune_buggy;

    return (
        <>

        


            <section className='package-banner'>
                <div className="container">
                    <div className="heading-box">
                        <h2>Dune Buggy Experience</h2>
                        <p>The wonders of the desert are best explored behind the wheel of the Desert Fox, the safest dune buggy sharjah has to offer, designed for fun with family and friends alike! Don’t know how to drive? Don’t worry! The dune buggies are fully automatic and come with a full roll cage, bucket seats, and safety harnesses, giving you all the cushion you need to fuel the adventurous spirit in you!</p>
                    </div>

                    <div className="content-box">
                        <div className="row g-5">

                            {dune_buggy_packages.map((item) => (
                                <div className="col-xl-6" key={item.id}>
                                    <Link to={`/dune-buggy-experience/${slugify(item.title)}`} class="card">
                                        <img loading="lazy" src={item.package_category_img} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{item.title}</h5>
                                            <p class="card-text">{item.description}</p>

                                        </div>

                                        <div className="card-footer">

                                            <h3 className='price'>{item.price}</h3>


                                            <div className="button-row">
                                                <Link to="/contact" className='book-now'>
                                                    <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.9734 4.21642C16.1378 4.01475 16.1378 3.68777 15.9734 3.4861L13.2938 0.199597C13.1294 -0.00207908 12.8627 -0.00207908 12.6984 0.199597C12.5339 0.401272 12.5339 0.728254 12.6984 0.929926L15.0802 3.85126L12.6984 6.7726C12.5339 6.97427 12.5339 7.30125 12.6984 7.50292C12.8627 7.70461 13.1294 7.70461 13.2938 7.50292L15.9734 4.21642ZM3.88615 4.36768H15.6756V3.33484H3.88615V4.36768ZM0.0966797 7.98265V10.0483H0.938785V7.98265H0.0966797ZM3.88615 3.33484C1.79329 3.33484 0.0966797 5.41573 0.0966797 7.98265H0.938785C0.938785 5.98615 2.25836 4.36768 3.88615 4.36768V3.33484Z" fill="#EFEFDF" />
                                                    </svg>
                                                    <p>BOOK NOW</p>
                                                </Link>
                                                <Link to={`/dune-buggy-experience/${slugify(item.title)}`} className='know-more'>
                                                    <p>Know more</p>
                                                    <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.48285 8.70379C7.87149 9.09619 8.50465 9.09924 8.89705 8.71061L15.2916 2.37738C15.684 1.98874 15.687 1.35558 15.2984 0.96318C14.9098 0.570779 14.2766 0.567728 13.8842 0.956367L8.20017 6.5859L2.57064 0.901862C2.182 0.509461 1.54884 0.506411 1.15644 0.895049C0.764037 1.28369 0.760987 1.91685 1.14963 2.30925L7.48285 8.70379ZM7.19337 7.99518L7.19337 7.99528L9.19335 8.00492L9.19335 8.00482L7.19337 7.99518Z" fill="#EFEFDF" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>


                                    </Link>
                                </div>

                            ))}

                        </div>
                    </div>
                </div>

            </section>


            <section className='faq' data-scroll-section>
                <div className="container">
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

        </>
    )
}
