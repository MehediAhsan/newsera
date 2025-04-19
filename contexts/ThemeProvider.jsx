'use client';

import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'light' || storedTheme === 'dark') {
            setTheme(storedTheme);
        } else {
            const systemPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            setTheme(systemPref);
        }
    }, []);

    useEffect(() => {
        if (!theme) return;

        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);

        const meta = document.querySelector('meta[name=theme-color]');
        if (meta) {
            meta.setAttribute('content', theme === 'dark' ? '#000000' : '#ffffff');
        }

        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}