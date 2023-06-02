import React, {createContext, useContext, useState} from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [darkMode, setDarkMode] = useState(true);
    
    const toggleTheme = (theme) => {
        if (theme === 'dark' && darkMode === true) return; 
        if (theme === 'light' && darkMode === false) return; 
        setDarkMode(prevDarkMode => !prevDarkMode);
    }

    return (
        <ThemeContext.Provider 
            value={{darkMode,
                    setDarkMode,
                    toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};
