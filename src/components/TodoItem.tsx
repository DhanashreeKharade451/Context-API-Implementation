import { useState } from "react";
import type { Todo } from "../types";
import { useTodos } from "../context/TodoContext";

interface Props {
  todo: Todo;
}

export const TodoItem = ({ todo }: Props) => {
  const { toggleTodo, deleteTodo, editTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text); 

  const handleEditSubmit = () => {
    if (!editText.trim())  return;
     editTodo(todo.id, editText);
     setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-3 rounded-lg shadow-sm">
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="w-4 h-4 accent-blue-600"
        />

        {isEditing ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleEditSubmit}
            onKeyDown={(e) => e.key === "Enter" && handleEditSubmit()}
            className="flex-1 px-2 py-1 rounded border"
            autoFocus
          />
        ) : (
          <span
            className={`flex-1 ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setIsEditing(true)}
          className="px-2 py-1 text-sm bg-yellow-400 
                     rounded hover:bg-yellow-500"
        >
          ✏️
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="px-2 py-1 text-sm bg-red-500 
                     text-white rounded hover:bg-red-600"
        >
          🗑️
        </button>
      </div>
    </li>
  );
};
