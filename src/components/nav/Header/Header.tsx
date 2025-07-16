// src/components/nav/Header/Header.tsx
'use client';

import React from 'react';
// import React, { useState, useEffect } from 'react';
// import { useTheme } from '@src/context/ThemeContext';
// import { Button } from '@components/form/Button';
import './Header.css';

// const ThemeToggle = () => {
//   const { toggleTheme } = useTheme();

//   return <Button onClick={toggleTheme}>Toggle Theme</Button>;
// };

const HeaderNav = () => {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return <Button disabled>Toggle Theme</Button>; // Placeholder to avoid flicker
//   }

  return (
    <div>
      {/* <ThemeToggle /> */}
    </div>
  );
};

export default HeaderNav;