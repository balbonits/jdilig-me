import React from 'react';
import FooterNav from '@components/nav/Footer/Footer';
import './Footer.css';

const FooterLayout = () => {
    return (
    <footer>
        <address>
            Redondo Beach, CA, USA <br />
            <a href='https://www.linkedin.com/in/rjdilig/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
        </address>
        <nav>
            <FooterNav />
        </nav>
    </footer>
    );
};

export default FooterLayout;