'use client'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';

export const DarkModeSwitcher = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setDarkMode(true);
        }
    };

    return (
        <li>
            <label
                className={`relative flex items-center cursor-pointer h-8 w-16 bg-gray-300 dark:custom-gradient-dark rounded-full shadow-inner transition-all`}
            >
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                />
                <span
                    className={`absolute flex items-center justify-center h-6 w-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${darkMode ? 'translate-x-9' : 'translate-x-1'
                        }`}>
                    {!darkMode && (
                        <FontAwesomeIcon icon={faSun} className="text-gray-400" />
                    )}
                    {darkMode && (
                        <FontAwesomeIcon icon={faMoon} className="text-blue-500" />
                    )}
                </span>
            </label>
        </li>
    );
};
