import React from 'react';
import useFetch from '../../apiCall/useFetch';

const MenuHouse = () => {
    const logements = useFetch('/logements.json');

    return (
        <div className="gallery">
            {logements.data.map((logement, index) => (
                <div key={index} className="gallery_card">
                    <h3
                        key={logement.title + logement.id}
                        className="gallery_card_title"
                    >
                        {logement.title}
                    </h3>
                </div>
            ))}
        </div>
    );
};

export default MenuHouse;
