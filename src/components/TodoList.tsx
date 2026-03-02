import { useTodos } from "../context/TodoContext";
import { useFilter } from "../context/FilterContext";
import { TodoItem } from "./TodoItem";
 export const TodoList = () => {
    const { todos, clearCompleted } = useTodos();
    const {filter} = useFilter();

    const filteredTodos  = todos.filter((todo) =>{
         if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
    });

     const itemsLeft = todos.filter((t) => !t.completed).length;
  const completedCount = todos.filter((t) => t.completed).length;

  return(
    <div>
        <ul className="space-y-3">
        {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo = {todo}/>
        ))}
        </ul>

           <div className="flex justify-between items-center mt-6 text-sm text-gray-600 dark:text-gray-300"> 
            <span>
                <strong>{itemsLeft}</strong> items left
            </span>

            {completedCount >0 &&(
                <button
                 onClick={clearCompleted}
            className="text-red-500 hover:underline"
                >
                    Clear Completed ({completedCount})
                </button>
            )}
           </div>
    </div>
  )
 }