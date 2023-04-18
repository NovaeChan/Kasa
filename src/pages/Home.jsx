import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Banner/Banner';
import Gallery from '../components/Gallery/Gallery';

import bannerHome from '../assets/images/banner-image.png';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner
                image={bannerHome}
                content="Chez vous, partout et ailleurs"
            />
            <Gallery />
            <Footer />
        </div>
    );
};

export default Home;
