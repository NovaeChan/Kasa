import React from 'react';
import { useState } from 'react';

import arrow from '../../assets/images/arrow_left.png';
import '../../styles/components/_carousel.scss';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="carousel">
            {images.length > 1 && (
                <img
                    className="arrow arrow_left"
                    src={arrow}
                    alt="Contenu précédent"
                    onClick={goToPrevious}
                />
            )}
            {images.map((image, key) => {
                return (
                    <img
                        key={key}
                        className={
                            key === currentIndex
                                ? 'carousel_img active'
                                : 'carousel_img'
                        }
                        src={image}
                        alt="Logement"
                    />
                );
            })}
            {images.length > 1 && (
                <img
                    className="arrow arrow_right"
                    src={arrow}
                    alt="Contenu suivant"
                    onClick={goToNext}
                />
            )}
            <p className="slideNumber">
                {currentIndex + 1} / {images.length}
            </p>
        </div>
    );
};

export default Carousel;
