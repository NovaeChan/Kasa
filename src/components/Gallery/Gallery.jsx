import React from 'react';
import { NavLink } from 'react-router-dom';
import useFetch from '../../apiCall/useFetch';

import '../../styles/components/_gallery.scss';

const MenuHouse = () => {
    const logements = useFetch('/logements.json');

    return (
        <div className="gallery">
            {logements.data.map((logement, index) => (
                <NavLink to={`logement/${logement.id}`} key={index}>
                    <div className="gallery_card">
                        <img src={logement.cover} alt={logement.title} />
                        <h3
                            key={logement.title + logement.id}
                            className="gallery_card_title"
                        >
                            {logement.title}
                        </h3>
                    </div>
                </NavLink>
            ))}
        </div>
    );
};

export default MenuHouse;
