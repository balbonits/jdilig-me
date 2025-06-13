import React from 'react';
import FooterNav from '../../nav/Footer/Footer';
import './Footer.css';

const FooterLayout = () => {
    return (
    <footer>
        <div>
            <h1>John Dilig</h1>
            <p>
                Redondo Beach, CA, USA <br />
            </p>
        </div>
        <FooterNav />
    </footer>
    );
};

export default FooterLayout;