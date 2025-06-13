import React from 'react';
import FooterNav from '@components/nav/Footer/Footer';
import './Footer.css';

const FooterLayout = () => {
    return (
    <footer>
        <div>
            <h1>John Dilig</h1>
            <p>
                Redondo Beach, CA, USA <br />
                <a href='https://www.linkedin.com/in/rjdilig/' target='_blank'>LinkedIn</a>
            </p>
        </div>
        <FooterNav />
    </footer>
    );
};

export default FooterLayout;