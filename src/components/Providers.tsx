'use client';

import { Provider } from 'react-redux';
import { store } from '@store';
import { ThemeProvider, useTheme } from '@src/context/ThemeContext';
import { useEffect, ReactNode } from 'react';

function ThemeApplier({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);
  return <>{children}</>;
}

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ThemeApplier>{children}</ThemeApplier>
      </ThemeProvider>
    </Provider>
  );
}