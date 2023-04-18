import React from 'react';

const Banner = ({ image, content }) => {
    return (
        <div className="banner">
            <img className="banner_image" src={image} alt="Bannière" />
            <span className="banner_content">{content}</span>
        </div>
    );
};

export default Banner;
