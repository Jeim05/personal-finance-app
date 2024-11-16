import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const DarkModeSwitcher = () => {
    return (
        <li>
            <label className="relative flex items-center cursor-pointer h-8 w-16 bg-gray-300 dark:bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-inner transition-all">
                <input type="checkbox" className="sr-only peer" />
                <span className="absolute flex items-center justify-between w-full px-1">
                    <span className="flex items-center justify-center h-6 w-6 bg-white rounded-full shadow-md ">
                        <FontAwesomeIcon icon={faSun} className='text-gray-400' />
                    </span>
                    <span className="hidden dark:flex items-center justify-center h-6 w-6 bg-white rounded-full shadow-md ">
                        <FontAwesomeIcon icon={faMoon} className="text-blue-500" />
                    </span>
                </span>
            </label>
        </li>
    );
};
