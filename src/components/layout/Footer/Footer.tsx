import React from 'react';
import FooterNav from '@components/nav/Footer/Footer';
import './Footer.css';

const FooterLayout = () => {
    return (
    <footer>
        <address>
            Redondo Beach, CA, USA <br />
        </address>
        <ul>
            <li><a href='https://www.linkedin.com/in/rjdilig/' target='_blank' rel='noopener noreferrer'>LinkedIn</a></li>
            <li><a href='https://github.com/balbonits' target='_blank' rel='noopener noreferrer'>GitHub</a></li>
        </ul>
        <nav>
            <FooterNav />
        </nav>
    </footer>
    );
};

export default FooterLayout;