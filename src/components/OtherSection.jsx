import React from 'react';

const OtherSection = ({ activeSlide }) => {
    const sectionContent = [
        'Content for Slide 1',
        'Content for Slide 2',
        'Content for Slide 3',
        // Add more as needed
    ];

    const sectionImages = [
        '/path/to/image1.jpg',
        '/path/to/image2.jpg',
        '/path/to/image3.jpg',
        // Add more as needed
    ];

    return (
        <div className="other-section">
            <h2>{sectionContent[activeSlide]}</h2>
            <img loading="lazy" src={sectionImages[activeSlide]} alt={`Image for slide ${activeSlide + 1}`} />
        </div>
    );
};

export default OtherSection;
