import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ContactUs() {
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        number_of_people: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    const navigate = useNavigate();

    const handle = (e) => {
        const { id, value } = e.target;
        setData(prevData => ({ ...prevData, [id]: value }));
    };

    const submit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Convert data to URLSearchParams
            const params = new URLSearchParams();
            params.append('name', data.name);
            params.append('email', data.email);
            params.append('phone', data.phone);
            params.append('service', data.service);
            params.append('number_of_people', data.number_of_people);
            params.append('message', data.message);

            // Send POST request with form data
            const response = await axios.post('https://zerzuraexperiences.com/mailer/sendmail_contact.php', params);
            console.log('Response:', response.data);
            setResponseMessage('Message sent successfully!');

            // Clear input fields
            setData({
                name: '',
                email: '',
                phone: '',
                service: '',
                number_of_people: '',
                message: ''
            });
            navigate('/thankyou-page');
        } catch (error) {
            console.error('Error:', error);
            setResponseMessage('There was an error sending your message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <>
            <section className="contact-us" data-scroll-section>
                <div className="container">
                    <div className="heading-box">
                        <h2>CONTACT US</h2></div>

                    <div className="content-box">
                        <div className="row g-5">
                            <div className="col-lg-6">
                                <form onSubmit={submit} method='POST' className='h-100'>
                                    <span className='form-submit-response'>{responseMessage}</span>

                                    <input onChange={handle}
                                        id='name'
                                        value={data.name}
                                        required
                                        type="text"
                                        placeholder='Enter Your Name' />
                                    <input onChange={handle}
                                        id='email'
                                        value={data.email}
                                        type="email"
                                        required
                                        placeholder='Enter Your Email' />
                                    <input onChange={handle}
                                        id='phone'
                                        value={data.phone}
                                        type="tel"
                                        required
                                        placeholder='Enter Your Phone Number' />
                                    <input onChange={handle}
                                        id='service'
                                        value={data.service}
                                        required
                                        type="text"
                                        placeholder='Service' />
                                    <input
                                        onChange={handle}
                                        id='number_of_people'
                                        value={data.number_of_people}
                                        required
                                        type="text"
                                        placeholder='Number of people' />
                                    <textarea
                                        onChange={handle}
                                        id='message'
                                        value={data.message}
                                        name="message"
                                        placeholder='message'></textarea>

                                    <button type="submit" disabled={isSubmitting}>
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </button>
                                </form>
                            </div>

                            <div className="col-lg-6">
                                <div className="right h-100">

                                    <div className="img-wrap">
                                        <img loading="lazy" className='img-fluid' src="/images/contact-us/contactus1.png" alt="" />
                                    </div>

                                    <div className="img-wrap text-end">
                                        <img loading="lazy" className='img-fluid' src="/images/contact-us/contactus2.png" alt="" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="address-details">
                        <div className="row g-5">
                            <div className="col-lg-6">
                                <div className="address-left-box">
                                    <a href="">
                                        <p><span>PHONE NO:</span>+97 145649959</p>
                                    </a>
                                    <a href="">
                                        <p><span>WHATSAPP:</span>+97 1529108567</p>
                                    </a>
                                    <a href="">
                                        <p><span>EMAIL:</span>info@zerzura.ae</p>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="address-right-box">
                                    <h2>ADDRESS</h2>
                                </div>
                            </div>

                            <div className="col-lg-6">

                            </div>

                            <div className="col-lg-6">
                                <div className="address-right-box">
                                    <h4>OFFICE 412 THE METROPOLIS TOWER AL ABRAJ ST.(BUSINESS BAY), DUBAI</h4>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <section className='map' data-scroll-section>
                <div className="container-fluid">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.056831487972!2d55.823737575160145!3d25.099937477773736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef599cd803e2635%3A0x8a7f22a4123cd767!2sZerzura%20Experiences!5e0!3m2!1sen!2sus!4v1723099410826!5m2!1sen!2sus"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
        </>
    )
}
