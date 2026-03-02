import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center items-start py-10">
      <div className="w-full max-w-xl bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Todo App (Context API)
          </h1>

          <button
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 
                       dark:bg-gray-700 dark:hover:bg-gray-600 
                       text-sm font-medium transition"
            aria-label="Switch to dark mode"
          >
            🌙 Switch to Dark
          </button>
        </header>

        {/* Main */}
        <main>
          
          {/* Input Form */}
          <form className="flex gap-2 mb-6">
            <input
              type="text"
              placeholder="What needs to be done?"
              className="flex-1 px-4 py-2 border border-gray-300 
                         rounded-lg focus:outline-none 
                         focus:ring-2 focus:ring-blue-500"
              aria-label="New todo text"
              value=""
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white 
                         rounded-lg hover:bg-blue-700 transition"
            >
              Add Todo
            </button>
          </form>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-3 mb-6">
            <button
              className="px-3 py-1 rounded-md bg-blue-600 text-white text-sm"
              aria-pressed="true"
            >
              All
            </button>
            <button
              className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 text-sm"
              aria-pressed="false"
            >
              Active
            </button>
            <button
              className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 text-sm"
              aria-pressed="false"
            >
              Completed
            </button>
          </div>

          {/* Todo List */}
          <div>
            <ul className="space-y-3">
              <li className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-3 rounded-lg shadow-sm">
                
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-blue-600"
                  />
                  <span className="line-through text-gray-500">
                    tgfh
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    className="px-2 py-1 text-sm bg-yellow-400 
                               rounded hover:bg-yellow-500"
                  >
                    ✏️
                  </button>
                  <button
                    className="px-2 py-1 text-sm bg-red-500 
                               text-white rounded hover:bg-red-600"
                  >
                    🗑️
                  </button>
                </div>
              </li>
            </ul>

            {/* Footer */}
            <div className="flex justify-between items-center mt-6 text-sm text-gray-600 dark:text-gray-300">
              <span>
                <strong>0</strong> items left
              </span>
              <button className="text-red-500 hover:underline">
                Clear Completed (1)
              </button>
            </div>
          </div>

        </main>
      </div>
    </div>
      
    </>
  );
}

export default App;
