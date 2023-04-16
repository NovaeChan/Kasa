import React from 'react';
import { Link } from 'react-router-dom';

import footerLogo from '../../assets/images/footer-logo.png';

const Footer = () => {
    return (
        <div className="footer">
            <Link to="/">
                <img src={footerLogo} alt="Logo Kasa Footer" />
            </Link>
            <p className="footer-copyright">© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;
