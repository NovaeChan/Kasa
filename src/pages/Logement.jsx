import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import Carousel from '../components/Carousel/Carousel';
import Dropdown from '../components/Dropdown/Dropdown';
import Footer from '../components/Footer/Footer';
import logements from '../apiCall/logements.json';

import greyStar from '../assets/images/greyStar.png';
import redStar from '../assets/images/redStar.png';

import '../styles/pages/logements.scss';

const Logement = () => {
    const currentIdtLogement = useParams().id;
    const logementData = logements.find(
        (logement) => logement.id === currentIdtLogement
    );
    const rating = logementData && logementData.rating;
    const stars = [...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
            <img
                key={index}
                src={ratingValue <= rating ? redStar : greyStar}
                alt="note"
            />
        );
    });

    const tags =
        logementData &&
        logementData?.tags.map((tag, index) => {
            return (
                <p key={index} className="logement_tag">
                    {tag}
                </p>
            );
        });

    return (
        <div>
            {logementData ? (
                <div>
                    <Header />
                    <Carousel images={logementData.pictures} />
                    <div className="logement">
                        <div className="logement_content">
                            <div className="logement_info">
                                <span className="logement_name">
                                    {logementData?.title}
                                </span>
                                <span className="logement_location">
                                    {logementData?.location}
                                </span>
                                <div className="logement_tags">{tags}</div>
                            </div>
                            <div className="logement_landlord">
                                <div className="landlord_info">
                                    <span className="landlord_name">
                                        {logementData?.host.name}
                                    </span>
                                    <img
                                        className="landlord_photo"
                                        src={logementData?.host.picture}
                                        alt="Propriétaire"
                                    />
                                </div>
                                <div className="landlord_note">{stars}</div>
                            </div>
                        </div>
                        <div className="logement_collapse">
                            <Dropdown
                                title="Description"
                                content={logementData?.description}
                            />
                            <Dropdown
                                title="Equipements"
                                content={logementData?.equipments}
                            />
                        </div>
                    </div>
                    <Footer />
                </div>
            ) : (
                <Navigate replace to="/404" />
            )}
        </div>
    );
};

export default Logement;
