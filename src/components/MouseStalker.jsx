import React, { useEffect, useRef } from 'react';
import '../cursor.css'; // Assuming you save the CSS in this file

const MouseStalker = () => {
    const mouseStalkerRef = useRef(null);
    const msPos = useRef({
        stalker: {
            x: document.documentElement.clientWidth / 2,
            y: document.documentElement.clientHeight / 2
        },
        mouse: {
            x: document.documentElement.clientWidth / 2,
            y: document.documentElement.clientHeight / 2
        }
    });

    useEffect(() => {
        const mouseStalker = mouseStalkerRef.current;
        const hoverEffectElements = document.querySelectorAll(".hover-effect");

        const msStalkerActivate = () => {
            mouseStalker.classList.add("isActive");
            document.removeEventListener("mouseover", msStalkerActivate);
            document.addEventListener("mousemove", mousemove);
        };

        const showMouseStalker = () => {
            mouseStalker.classList.add("show");
            requestAnimationFrame(update);
        };

        const hideMouseStalker = () => {
            mouseStalker.classList.remove("show");
        };

        const mousemove = (e) => {
            msPos.current.mouse.x = e.clientX;
            msPos.current.mouse.y = e.clientY;
        };

        const update = () => {
            msPos.current.stalker.x += (msPos.current.mouse.x - msPos.current.stalker.x) * 0.1;
            msPos.current.stalker.y += (msPos.current.mouse.y - msPos.current.stalker.y) * 0.1;

            const x = Math.round(msPos.current.stalker.x * 10) / 10;
            const y = Math.round(msPos.current.stalker.y * 10) / 10;

            mouseStalker.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            requestAnimationFrame(update);
        };

        const addHoverEffectClass = (hoveredElement) => {
            if (hoveredElement.classList.contains("scale--small")) {
                mouseStalker.classList.add("scale--small");
            }
            if (hoveredElement.classList.contains("scale--large")) {
                mouseStalker.classList.add("scale--large");
            }
            if (hoveredElement.classList.contains("mix-blend")) {
                mouseStalker.classList.add("mix-blend");
            }
            if (hoveredElement.classList.contains("show-text")) {
                mouseStalker.classList.add("show-text");
            }

            if (hoveredElement.classList.contains("drag")) {
                mouseStalker.classList.add("drag");
            }
        };

        const removeHoverEffectClass = (hoveredElement) => {
            if (hoveredElement.classList.contains("scale--small")) {
                mouseStalker.classList.remove("scale--small");
            }
            if (hoveredElement.classList.contains("scale--large")) {
                mouseStalker.classList.remove("scale--large");
            }
            if (hoveredElement.classList.contains("mix-blend")) {
                mouseStalker.classList.remove("mix-blend");
            }
            if (hoveredElement.classList.contains("show-text")) {
                mouseStalker.classList.remove("show-text");
            }

            if (hoveredElement.classList.contains("drag")) {
                mouseStalker.classList.remove("drag");
            }
        };

        if (window.matchMedia("(pointer: fine)")) {
            document.addEventListener("mouseover", msStalkerActivate);
        }

        document.body.addEventListener('mouseenter', showMouseStalker);
        document.body.addEventListener('mouseleave', hideMouseStalker);

        hoverEffectElements.forEach((element) => {
            element.addEventListener("mouseover", () => addHoverEffectClass(element));
            element.addEventListener("mouseout", () => removeHoverEffectClass(element));
        });

        return () => {
            document.removeEventListener("mousemove", mousemove);
            document.body.removeEventListener('mouseenter', showMouseStalker);
            document.body.removeEventListener('mouseleave', hideMouseStalker);
        };
    }, []);






    return (
        <>
            {/* <div className="img-container">
                <img loading="lazy"
                    className="hover-effect scale--large show-text"
                    src="https://github.com/Reikasan/photo_for_codepen/blob/main/IMG_1120.jpg?raw=true"
                    alt="random"
                />
            </div> */}

            <div id="mouse-stalker" className="mouse-stalker" ref={mouseStalkerRef}>
                <div className="mouse-stalker__container">
                    <div className="mouse-stalker--circle"></div>

                    <p className="mouse-stalker--text">
                        <svg className='img-fluid' width="30" height="34" viewBox="0 0 450 348" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M449.316 35.1783C450.519 28.1001 445.757 21.3869 438.678 20.1838L323.333 0.578954C316.254 -0.624097 309.541 4.13864 308.338 11.2168C307.135 18.295 311.898 25.0083 318.976 26.2114L421.505 43.6379L404.079 146.167C402.876 153.246 407.639 159.959 414.717 161.162C421.795 162.365 428.508 157.602 429.711 150.524L449.316 35.1783ZM428.978 22.3973L0.477876 326.397L15.5221 347.603L444.022 43.6027L428.978 22.3973Z" fill="#9c5849" />
                    </svg>
                    </p>

                </div>
            </div>



        </>
    );
};

export default MouseStalker;
