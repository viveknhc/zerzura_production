import React, { useEffect, useState } from "react";
import axios from "axios";

const InstagramFeed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchInstagramPosts = async () => {
            try {
                const response = await axios.get(
                    `https://graph.instagram.com/v15.0/me/media?fields=id,media_type,media_url,thumbnail_url,permalink&access_token=YOUR_ACCESS_TOKEN`
                );
                setPosts(response.data.data);
            } catch (error) {
                console.error("Error fetching Instagram posts", error);
            }
        };

        fetchInstagramPosts();
    }, []);

    return (
        <div className="instagram-feed">
            {posts.map((post) => (
                <a href={post.permalink} key={post.id} target="_blank" rel="noopener noreferrer">
                    {post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM" ? (
                        <img loading="lazy" src={post.media_url} alt="Instagram post" />
                    ) : post.media_type === "VIDEO" ? (
                        <video controls>
                            <source src={post.media_url} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : null}
                </a>
            ))}
        </div>
    );
};

export default InstagramFeed;
