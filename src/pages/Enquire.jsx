import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Enquire() {


    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        number_of_people: '',
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
            params.append('service', data.city);
            params.append('number_of_people', data.number_of_people);

            // Send POST request with form data
            const response = await axios.post('https://zerzuraexperiences.com/mailer/sendmail_enquiry.php', params);
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
        <section className="contact-us enquire" data-scroll-section>
            <div className="container">
                <div className="heading-box">
                    <h2>Enquire</h2></div>

                <div className="content-box">
                    <form onSubmit={submit} method='POST' className='h-100'>
                        <div className="row">
                            <div className="col-lg-6">

                                <input onChange={handle}
                                    id='name'
                                    value={data.name}
                                    required
                                    type="text"
                                    placeholder='Enter Your Name' />
                            </div>

                            <div className="col-lg-6">

                                <input onChange={handle}
                                    id='email'
                                    value={data.email}
                                    type="email"
                                    required
                                    placeholder='Enter Your Email' />
                            </div>

                            <div className="col-lg-6">

                                <input onChange={handle}
                                    id='phone'
                                    value={data.phone}
                                    type="tel"
                                    required
                                    placeholder='Enter Your Phone Number' />
                            </div>

                            <div className="col-lg-6">

                                <input onChange={handle}
                                    id='city'
                                    value={data.city}
                                    required
                                    type="text"
                                    placeholder='Enter Your City' />
                            </div>

                            <div className="col-lg-12">

                                <input onChange={handle}
                                    id='number_of_people'
                                    value={data.number_of_people}
                                    required
                                    type="text"
                                    placeholder='Number of Peoples' />
                            </div>

                        </div>
                        <div className='text-center'>

                            <button className='mt-5'type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Enquire Now"}</button>
                        </div>

                    </form>
                </div>



            </div>
        </section>
    )
}
