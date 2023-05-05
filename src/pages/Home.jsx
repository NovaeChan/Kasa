import React from 'react'
import Banner from '../components/Banner/Banner'
import Gallery from '../components/Gallery/Gallery'

import bannerHome from '../assets/images/banner-image.png'

const Home = () => {
    document.title = 'Kasa - Homepage'
    return (
        <div>
            <Banner
                image={bannerHome}
                content="Chez vous, partout et ailleurs"
            />
            <Gallery />
        </div>
    )
}

export default Home
