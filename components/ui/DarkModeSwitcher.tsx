"use client"
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

export const DarkModeSwitcher = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setDarkMode(true);
        }
    };

    return (
        <li>
            <label
                className={`relative flex items-center cursor-pointer h-8 w-16 
                    ${darkMode ? 'dark:bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gray-300'} 
                    rounded-full shadow-inner transition-all`}
            >
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                />
                <span className="absolute flex items-center justify-between w-full px-1">
                    <span
                        className={`flex items-center justify-center h-6 w-6 bg-white rounded-full shadow-md 
                            ${darkMode ? 'hidden' : ''}`}
                    >
                        <FontAwesomeIcon icon={faSun} className="text-gray-400" />
                    </span>
                    <span
                        className={`flex items-center justify-center h-6 w-6 bg-white rounded-full shadow-md 
                            ${darkMode ? '' : 'hidden'}`}
                    >
                        <FontAwesomeIcon icon={faMoon} className="text-blue-500" />
                    </span>
                </span>
            </label>
        </li>
    );
};
