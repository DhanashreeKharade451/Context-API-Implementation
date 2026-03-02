import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useTheme } from "./context/ThemeContext";
import { ThemeToggleButton } from "./components/ThemeToggleButton";
import { TodoInput } from "./components/TodoInput";
import { FilterButtons } from "./components/FilterButtons";


function App() {
   const { theme } = useTheme();

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center items-start py-10">
        <div className="w-full max-w-xl bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6">
          <header className="flex justify-between items-center mb-6">
            <h1>
              Todo App (Context API)
            </h1>
            <ThemeToggleButton/>
          </header>

          <TodoInput/>
          <FilterButtons/>
        </div>
      </div>
    </div>
  );
}

export default App;
