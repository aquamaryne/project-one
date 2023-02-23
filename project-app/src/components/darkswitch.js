import React, { useState, useEffect } from "react";

const DarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const body = document.querySelector('body');
        if(isDarkMode){
            body.classList.add('dark-mode')
        } else {
            body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return(
        <div className="dark-mode-switch">
            <label htmlFor="dark-mode-toggle"> Dark Mode </label>
            <input 
                type="checkbox"
                is="dark-mode-toggle"
                onChange={toggleDarkMode}
            />
        </div>
    )
}

export default DarkMode;