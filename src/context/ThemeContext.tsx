'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType { theme: 'light' | 'dark'; toggleTheme: () => void; }
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = sessionStorage.getItem('theme');
      if (storedTheme === 'light' || storedTheme === 'dark') {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(storedTheme);
        return storedTheme;
      }
    }
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add('light');
    return 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    sessionStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};