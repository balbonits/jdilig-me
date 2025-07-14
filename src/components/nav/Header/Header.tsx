'use client';

import React from 'react';
import { useTheme } from '@src/context/ThemeContext';
import { Button } from '@components/form/Button';
import './Header.css';

const HeaderNav = () => {
  const { toggleTheme } = useTheme();

  return (
    <div>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
    </div>
  );
};

export default HeaderNav;