import { useState } from "react";
import { useTodos } from "../context/TodoContext";

export const TodoInput = () => {
    const [text,setText] = useState("");
    const {addTodo} = useTodos();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(! text.trim()) return;

        addTodo(text);
        setText("");
    };

    return(
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
            <input 
            type="text" 
            value={text}
            onChange={(e) => setText(e.target.value)}
             placeholder="What needs to be done?"
              className="flex-1 px-4 py-2 border border-gray-300 
                   rounded-lg focus:outline-none 
                   focus:ring-2 focus:ring-blue-500"
            />

            <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white 
                   rounded-lg hover:bg-blue-700 transition"
            >Add Todo</button>
        </form>
    );
};

