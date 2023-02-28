import React, { useState } from "react";
import './darkmode.css';

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return(
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
            <button onClick={toggleDarkMode} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4">
                {darkMode ? 'Light' : 'Darks'}
            </button>
        </div>
    )
}

export default DarkMode;