'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType { theme: 'light' | 'dark'; toggleTheme: () => void; }
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Set default theme to 'light'
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Only access window/sessionStorage on client
    const storedTheme = typeof window !== 'undefined'
      ? (sessionStorage.getItem('theme') as 'light' | 'dark' | null)
      : null;
    // Always default to 'light' if no stored theme
    const initialTheme = storedTheme || 'light';
    setTheme(initialTheme);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(initialTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('theme', newTheme);
    }
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(newTheme);
    }
  };

  if (!mounted) {
    return null; // Delay rendering until mounted
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};

// Add default export for compatibility
export default ThemeProvider;