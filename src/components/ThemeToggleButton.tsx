import { useState } from "react";
import { useTheme } from "../context/ThemeContext";


export const ThemeToggleButton = () => {

    const {theme, toggleTheme} = useTheme();

    return(
        <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 
                 dark:bg-gray-700 dark:hover:bg-gray-600 
                 text-sm font-medium transition">
            {theme === "light" ? "🌙 Switch to Dark" : "☀️ Switch to Light"}
        </button>
    )
}