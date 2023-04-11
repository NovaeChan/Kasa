import React from 'react';
import Header from '../components/Header/Header';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <Header />
            <h1>404</h1>
            <p>Oups ! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d'Accueil</Link>
        </div>
    );
};

export default Error;
