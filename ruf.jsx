import React, { useState } from 'react';

const WhyChooseUs = () => {
  const [currentImg, setCurrentImg] = useState('images/package/include1.png');

  const items = [
    { title: 'Expertise in Local Market', imgSrc: 'images/package/include1.png' },
    { title: 'PERSONALIZED SERVICE', imgSrc: 'images/package/include1.png' },
    { title: 'TRANSPARENT TRANSACTIONS', imgSrc: 'images/package/include1.png' },
    { title: 'STRONG NEGOTION SKILLS', imgSrc: 'images/package/include1.png' },
    { title: 'COMPREHENSIVE SUPPORT', imgSrc: 'images/package/include1.png' },
    { title: 'TRUSTED REPUTATION', imgSrc: 'images/package/include1.png' },
  ];

  const handleMouseEnter = (imgSrc) => {
    setCurrentImg(imgSrc);
  };

  return (
    <div className="content-box">
      <div className="row">
        <div className="col-lg-5 d-flex align-items-center">
          <div className="left">
            {items.map((item, index) => (
              <div
                className="whychoose-item"
                key={index}
                onMouseEnter={() => handleMouseEnter(item.imgSrc)}
              >
                <h4 className="show-text hover-effect scale--large">
                  {item.title}
                </h4>
                <img loading="lazy" src={item.imgSrc} alt="" className="d-none" />
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-7">
          <div className="right shine">
            <img loading="lazy" id="whyChooseImg" className="img-fluid" src={currentImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
