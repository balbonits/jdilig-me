'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType { mode: 'light' | 'dark'; toggleTheme: () => void; }
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const toggleTheme = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  return <ThemeContext.Provider value={{ mode, toggleTheme }}>
    {children}
  </ThemeContext.Provider>;
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};