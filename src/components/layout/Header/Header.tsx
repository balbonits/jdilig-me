// src/components/layout/Header/Header.tsx
'use client';

import React from 'react';
import HeaderNav from '@components/nav/Header/Header';
import './Header.css';

const HeaderLayout = () => {
  return (
    <header className="header-layout">
      <div className="header-content">
        <h1 className="header-name">John Dilig</h1>
        <HeaderNav />
      </div>
    </header>
  );
};

export default HeaderLayout;