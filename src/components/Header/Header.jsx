import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <div className="header">
            <Link to={'/'}>
                <img src={Logo} alt="Logo Kasa" />
            </Link>
            <ul className="nav">
                <li
                    className={
                        window.location.pathname === '/'
                            ? 'nav_item_active'
                            : 'nav_item'
                    }
                >
                    <Link
                        to={'/'}
                        className='{(nav) => (nav.isActive ? "nav-active" : "")}'
                    >
                        Accueil
                    </Link>
                </li>
                <li
                    className={
                        window.location.pathname === '/About'
                            ? 'nav_item_active'
                            : 'nav_item'
                    }
                >
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
