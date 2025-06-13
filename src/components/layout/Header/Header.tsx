import React from 'react';
import HeaderNav from '@components/nav/Header/Header';
import './Header.css';

const HeaderLayout = () => {
    return (
    <header>
        <div>
            <h1>John Dilig</h1>
        </div>
        <HeaderNav />
    </header>
    );
};

export default HeaderLayout;