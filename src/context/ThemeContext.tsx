import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { ThemeType } from "../types";

interface ThemeContextType {
    theme: ThemeType;
    toggleTheme: () => void;
}
 
const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const stored = localStorage.getItem("theme") as ThemeType;
    const [theme, setTheme] = useState<ThemeType>(stored || "light");

    useEffect(() => {
        localStorage.setItem("theme", theme);
    },[theme]);

    const toggleTheme = () =>
        setTheme((prev) => (prev === "light"? "dark" : "light"));

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>

        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context =useContext(ThemeContext);
    if(!context) throw new Error ("useTheme must be inside ThemeProvider");
    return context;
};