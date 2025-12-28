import { createContext, useContext, useState, useEffect } from "react"

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem("portfolio-theme")
        return saved || "midnight"
    })

    useEffect(() => {
        localStorage.setItem("portfolio-theme", theme)
        // Apply theme class to document for global CSS variable switching
        document.documentElement.setAttribute("data-theme", theme)
    }, [theme])

    const toggleTheme = (newTheme) => {
        setTheme(newTheme)
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme: toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) throw new Error("useTheme must be used within a ThemeProvider")
    return context
}
