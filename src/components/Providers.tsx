'use client';

import { Provider } from 'react-redux';
import { store } from '@store';
import { ThemeProvider, useTheme } from '@src/context/ThemeContext';
import { useEffect, ReactNode } from 'react';

function ThemeApplier({ children }: { children: ReactNode }) {
  const { mode } = useTheme();
  useEffect(() => {
    document.documentElement.className = mode === 'dark' ? 'dark' : '';
  }, [mode]);
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