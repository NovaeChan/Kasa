import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';

import '../styles/pages/error.scss';

const Error = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className="error">
                <h1 className="error-title">404</h1>
                <p className="error-description">
                    Oups ! La page que vous demandez n'existe pas.
                </p>
                <Link to="/" className="error-link">
                    Retourner sur la page d'Accueil
                </Link>
            </div>
            <Footer />
        </div>
    );
};

export default Error;
