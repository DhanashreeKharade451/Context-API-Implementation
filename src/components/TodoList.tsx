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

           <div>
            <span>
                <strong>{itemsLeft}</strong> items left
            </span>
           </div>
    </div>
  )
 }