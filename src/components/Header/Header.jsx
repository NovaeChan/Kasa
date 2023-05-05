import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import Logo from '../../assets/images/logo.png'
import '../../styles/components/_header.scss'

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
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
                    <NavLink
                        to="/"
                        className='{(nav) => (nav.isActive ? "nav-active" : "")}'
                    >
                        Accueil
                    </NavLink>
                </li>
                <li
                    className={
                        window.location.pathname === '/about'
                            ? 'nav_item_active'
                            : 'nav_item'
                    }
                >
                    <NavLink
                        to="/about"
                        className='{(nav) => (nav.isActive ? "nav-active" : "")}'
                    >
                        A propos
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header
