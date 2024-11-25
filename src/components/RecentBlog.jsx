import React, { useEffect, useState } from 'react';
import axios from 'axios';
import getToken from '../customHook/getToken.js';

export default function RecentBlog() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const token = await getToken();
                const response = await axios.get('https://zerzuraexperiences.com/blogs/wp-json/my-api/v1/popular-posts/', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setPosts(response.data);
            } catch (error) {
                setError(error);
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching posts: {error.message}</p>;
    // Get the last four posts
    const lastPost1 = posts[posts.length - 1] || {};
    const lastPost2 = posts[posts.length - 2] || {};
    const lastPost3 = posts[posts.length - 3] || {};
    const lastPost4 = posts[posts.length - 4] || {};

    return (
        <div>
            <div className="blog-home">
                <section className='home-blog' data-scroll-section>
                    <div className="container-fluid">
                        <div className="heading-box">
                            <h2>Blog</h2>
                        </div>

                        <div className="content-box">
                            <div className="row g-3">
                                {/* First Post */}
                                <div className="col-lg-3">
                                    <a  href={lastPost4.link}>
                                    <div className="card h-100">
                                        <div className="img-top-box">
                                            <img loading="lazy" className='img-fluid' src={lastPost4.featured_image || 'Default Title'} alt="" />
                                            <h5>{lastPost4.title}</h5>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text" dangerouslySetInnerHTML={{ __html: lastPost4.excerpt || 'Default Content' }}>
                                                
                                            </p>
                                            <div className='readMore'>
                                                <img loading="lazy" src="/images/home/readmore-arrow.png" alt="" />
                                                <a href={lastPost4.link} >Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                    </a>
                                   
                                </div>

                                {/* Second Post */}
                                <div className="col-lg-9">
                                    <a href={lastPost3.link}>
                                    <div className="card h-100">
                                        <div className="row g-0">
                                            <div className="col-xl-7">
                                                <div className="left-content">
                                                    <h4 className='heading'>{lastPost3.title || 'Default Title'}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: lastPost3.excerptbg || 'Default Content' }}>

                                                    </p>
                                                    {/* Add other details here */}
                                                    <ul>
                                                        {/* List items */}
                                                    </ul>
                                                    <div className='readMore'>
                                                        <img loading="lazy" src="/images/home/readmore-arrow.png" alt="" />
                                                        <a href={lastPost3.link}>Read More</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-5">
                                                <div className="right-img-box">
                                                    <img loading="lazy" className='img-fluid' src={lastPost3.featured_image || 'Default Title'} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </a>
                                   
                                </div>

                                {/* Third Post */}
                                <div className="col-lg-9">
                                    <a href={lastPost2.link} >
                                    <div className="card h-100">
                                        <div className="row g-0">
                                            <div className="col-xl-7">
                                                <div className="left-content">
                                                    <h4 className='heading'>{lastPost2.title || 'Default Title'}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: lastPost2.excerptbg || 'Default Content' }}>

                                                    </p>
                                                    {/* Add other details here */}
                                                    <ul>
                                                        {/* List items */}
                                                    </ul>
                                                    <div className='readMore'>
                                                        <img loading="lazy" src="/images/home/readmore-arrow.png" alt="" />
                                                        <a href={lastPost2.link}>Read More</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-5">
                                                <div className="right-img-box">
                                                    <img loading="lazy" className='img-fluid' src={lastPost2.featured_image || 'Default Content'} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </a>
                                  

                                </div>

                                {/* Fourth Post */}
                                <div className="col-lg-3">
                                    <a href={lastPost1.link || 'Default Content'}>
                                    <div className="card h-100">
                                        <div className="img-top-box">
                                            <img loading="lazy" className='img-fluid' src={lastPost1.featured_image || 'Default Content'} alt="" />
                                            <h5>{lastPost1.title}</h5>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text" dangerouslySetInnerHTML={{ __html: lastPost1.excerpt || 'Default Content' }}>

                                            </p>
                                            <div className='readMore'>
                                                <img loading="lazy" src="/images/home/readmore-arrow.png" alt="" />
                                                <a href={lastPost1.link || 'Default Content'}>Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                    </a>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
