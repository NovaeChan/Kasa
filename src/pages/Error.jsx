import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/pages/error.scss'

const Error = () => {
    document.title = 'Kasa - Error 404'
    return (
        <div className="wrapper">
            <div className="error">
                <h1 className="error-title">404</h1>
                <p className="error-description">
                    Oups ! La page que vous demandez n'existe pas.
                </p>
                <Link to="/" className="error-link">
                    Retourner sur la page d'Accueil
                </Link>
            </div>
        </div>
    )
}

export default Error
