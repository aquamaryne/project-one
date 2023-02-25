import React, { useState } from "react";
import './darkmode.css';

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return(
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
            <button onClick={toggleDarkMode}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    )
}

export default DarkMode;