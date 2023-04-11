import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link to={'/'}>
                <img src="./LOGO.svg" alt="Logo de KASA" />
            </Link>
            <ul>
                <li>
                    <Link
                        to={'/'}
                        className='{(nav) => (nav.isActive ? "nav-active" : "")}'
                    >
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link
                        to={'/About'}
                        className='{(nav) => (nav.isActive ? "nav-active" : "")}'
                    >
                        A propos
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
