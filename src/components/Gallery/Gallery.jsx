import React from 'react'
import useFetch from '../../apiCall/useFetch'
import Card from '../Cards/Card'

import '../../styles/components/_gallery.scss'

const MenuHouse = () => {
    const logements = useFetch('/logements.json')

    return (
        <div className="gallery">
            {logements.data.map((logement, index) => {
                return (
                    <Card
                        key={logement.id + index}
                        title={logement.title}
                        img={logement.cover}
                        id={logement.id}
                    />
                )
            })}
        </div>
    )
}

export default MenuHouse
