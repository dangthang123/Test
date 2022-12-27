import { createContext, useState } from 'react';

const ThemeContext = createContext()
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark')

    const handleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')

    }

    const value = {
        theme,
        handleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };