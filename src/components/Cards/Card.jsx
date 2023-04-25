import React from 'react'
import { NavLink } from 'react-router-dom'

import '../../styles/components/_card.scss'

const Card = ({ id, title, img }) => {
    return (
        <div>
            <NavLink to={`logement/${id}`}>
                <div className="gallery_card">
                    <img src={img} alt={title} />
                    <h3 className="gallery_card_title">{title}</h3>
                </div>
            </NavLink>
        </div>
    )
}

export default Card
