import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

export default function PreviewVideo() {
    gsap.registerPlugin(ScrollTrigger);
    const prevVideo = useRef(null);

    useLayoutEffect(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".previewVideo",
                scrub: 1,
                start: "top 70%",
                end: "bottom bottom",
                ease: "power1.out",
            }
        });

        timeline.to(".previewVideo video", {
            scale: 1,
            duration: 1.4,
        });
    }, []);

    return (
        <section className="previewVideo">
            <div className="container-fluid">
                <video ref={prevVideo} src="/images/home/zerzura_website-premo.mp4" playsinline autoPlay muted loop></video>
            </div>
        </section>
    );
}
