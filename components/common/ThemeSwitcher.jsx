'use client';

import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '@/contexts/ThemeProvider';
import { useContext } from 'react';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="rounded-full transition-colors"
    >
      <AnimatePresence mode="wait">
        {theme === 'dark' ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.1 }}
          >
            <Sun className="w-6 h-6 text-yellow-400" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.1 }}
          >
            <Moon className="w-6 h-6 text-gray-800" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
