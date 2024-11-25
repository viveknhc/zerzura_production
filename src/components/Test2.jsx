import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

export default function Test2() {

    const para2 = useRef()
    gsap.registerPlugin(ScrollTrigger);   
    
    useLayoutEffect(() => {

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".test2",
                start: "top 30%",
                end: "bottom 10%",
                scrub: 1,

            }
        });

        // Add animations to the timeline
        timeline.to(".test2 p",
            {
                rotate: 360,
                duration: 3,
                fontSize: "50px",
            });

    }, []);
    return (
        <div className='section test2'>
            <p ref={para2}>hellow</p>
        </div>
    )
}
