'use client';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@store';
import { toggleTheme } from '@store/themeSlice';

export default function ThemeToggle() {
  const theme = useSelector((state: RootState) => state.theme?.mode ?? 'dark');
  const dispatch = useDispatch<AppDispatch>();

  return (
    <button onClick={() => dispatch(toggleTheme())} className={`p-2 rounded ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      Toggle to {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
}