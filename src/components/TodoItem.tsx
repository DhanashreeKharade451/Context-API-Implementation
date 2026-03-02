import { useState } from "react";
import type{ Todo } from "../types";
import { useTodos } from "../context/TodoContext";

interface Props {
    todo: Todo;
}

export const TodoItem = ({todo}: Props) => {
        const { toggleTodo, deleteTodo, editTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  return(
    <li className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-3 rounded-lg shadow-sm">
        <div className="flex items-center gap-3 flex-1">
            <input
             type="checkbox" 
             checked = {todo.completed}
             onChange={() => toggleTodo(todo.id)}
             className="w-4 h-4 accent-blue-600"
            />
      

        {isEditing? (<input/>):(
            <span>{todo.text}</span>
        )}
          </div>

          <div>
            <button>
                ✏️
            </button>
            <button>
                 🗑️
            </button>
          </div>
    </li>
  );
};