import { 
    createContext, 
    useContext, 
    useReducer, 
    useEffect,
     useMemo,
     Children
     ReactNode

 } from "react";
 import type { Todo } from "../types";
import { stringify } from "querystring";
import { text } from "stream/consumers";
 
 interface TodoState {
    todos: Todo[];
 };

 type Action = 
 |{type: 'ADD'; payload: string}
 |{type: 'TOGGLE'; payload: string}
 |{type: 'DELETE'; payload: string}
 |{type: 'EDIT'; payload:{ id: string; text: string }}
 |{type: 'CLEAR_COMPLETED'; payload: string};

 interface TodoContextType {
    todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
  clearCompleted: () => void;
 }

 const TodoContext = createContext<TodoContextType |null>(null);

 const reducer = (state: TodoState, action: Action): TodoState => {
    switch(action.type){
        case "ADD":
            return{
                todos: [...state.todos, 
                    {id: crypto.randomUUID(), text: action.payload, completed:false},
                ],
            };

            case "TOGGLE":
                return{
                    todos: state.todos.map((todo) => 
                        todo.id === action.payload? 
                    {...todo, completed: !todo.completed} :todo
                    ),
                };

            case "DELETE":
                return {
                    todos: state.todos.filter((todo) => todo.id !== action.payload),
                };

            case "CLEAR_COMPLETED":
                return {
                    todos: state.todos.filter((todo) => !todo.completed),
                };

                default:
                    return state;
    }
 };

 
 export const TodoProvider = ({children}: {children: ReactNode}) => {
    const stored = localStorage.getItem("todos");
    const initialState: TodoState = {
            todos: stored ? JSON.parse(stored): [],
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const value: TodoContextType = {
    todos: state.todos,
    addTodo: (text) => dispatch({ type: "ADD", payload: text }),
    toggleTodo: (id) => dispatch({ type: "TOGGLE", payload: id }),
    deleteTodo: (id) => dispatch({ type: "DELETE", payload: id }),
    editTodo: (id, text) =>
      dispatch({ type: "EDIT", payload: { id, text } }),
    clearCompleted: () => dispatch({ type: "CLEAR_COMPLETED",  payload: text }),
  };

    

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(state.todos));
    },[state.todos]);

    return(
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
};


export const useTodos = () => {
    const context = useContext(TodoContext);
    if (!context) throw new Error("useTodos must be inside TodoProvider");
    return context;
};