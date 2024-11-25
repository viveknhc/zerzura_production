import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Preloader = () => {
    const [animate, setAnimate] = useState([false, false, false, false, false, false, false]);
    const [blocksAnimate, setBlocksAnimate] = useState(false);
    const [preloaderAnimate, setPreloaderAnimate] = useState(false);
    const location = useLocation(); // Detect route change

    useEffect(() => {
        // Reset all animations when route changes
        setAnimate([false, false, false, false, false, false, false]);
        setBlocksAnimate(false);
        setPreloaderAnimate(false);

        const timeouts = [];

        // Stagger the animation of each item with a slight overlap
        animate.forEach((_, index) => {
            const timeout = setTimeout(() => {
                setAnimate((prevAnimate) => {
                    const newAnimate = [...prevAnimate];
                    newAnimate[index] = true;
                    return newAnimate;
                });

                // If this is the last item, animate the preloader-blocks after a delay
                if (index === animate.length - 1) {
                    setTimeout(() => {
                        setBlocksAnimate(true);

                        // After blocksAnimate, move the preloader up
                        setTimeout(() => {
                            setPreloaderAnimate(true);
                        }, 500); // Adjust delay as needed for preloader animation
                    }, 30); // Delay for the block animations to complete
                }
            }, 200 * index); // Start next animation before current one finishes

            timeouts.push(timeout);
        });

        // Cleanup timeouts on component unmount or route change
        return () => {
            timeouts.forEach((timeout) => clearTimeout(timeout));
        };
    }, [location.pathname]); // Re-run effect on route change

    return (
        <div className={`preloader ${preloaderAnimate ? 'animate' : ''}`}>
            <div className={`preloader-blocks ${blocksAnimate ? 'animate' : ''}`}>
                {['Z', 'E', 'R', 'Z', 'U', 'R', 'A'].map((letter, index) => (
                    <div key={index} className={`block item${index + 1} ${animate[index] ? 'animate' : ''}`}>
                        <div className="content-wrap">
                            <img loading="lazy" className="img-fluid" src={`/images/preloader/icon${index + 1}.png`} alt={`Icon ${index + 1}`} />
                            <p>{letter}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Preloader;
