import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

export default function Test() {
  const para = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".test",
        start: "top 30%",
        end: "bottom 10%",
        scrub: 1,
      },
    });

    // Move the paragraph element 500px in the x direction
    timeline.to(".test p", {
      y:-200,  
      x: 500, // Move 500px in x direction
      duration: 3,
      ease: "none",
      scrub: 1,
    });

  }, []);

  return (
    <div className='section test' data-scroll-section>
      <h1 data-scroll data-scroll-speed="1.5">HIIIIIIIIII</h1>
      <p ref={para}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsum tempora eaque a. Quo, aperiam esse? Voluptates, quis blanditiis animi ea delectus similique, inventore dicta temporibus, cumque excepturi quia mollitia.
      </p>
    </div>
  );
}
