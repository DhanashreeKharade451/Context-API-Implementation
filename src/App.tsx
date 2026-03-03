import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useTheme } from "./context/ThemeContext";
import { ThemeToggleButton } from "./components/ThemeToggleButton";
import { TodoInput } from "./components/TodoInput";
import { FilterButtons } from "./components/FilterButtons";
import { TodoList } from "./components/TodoList";


function App() {
   const { theme } = useTheme();

  return (
 <div
      className={`
        ${theme === "dark" ? "dark" : ""}
        min-h-screen
        flex justify-center items-start py-10
        bg-gray-100
      `}
    >
      <div
        className="
          w-full max-w-xl
          bg-white dark:bg-gray-800
          shadow-xl rounded-2xl p-6
          transition-colors duration-500
        "
      >
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Todo App
          </h1>
          <ThemeToggleButton />
        </header>

        <TodoInput />
        <FilterButtons />
        <TodoList />
      </div>
    </div> 

   
  );
}

export default App;
