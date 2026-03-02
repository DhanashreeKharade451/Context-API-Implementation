import { 
    createContext, 
    useContext, 
    useReducer, 
    useEffect,
     useMemo,
     Children

 } from "react";
 import type { Todo } from "../types";

 
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


 const getInitialTodos = (): Todo[] => {
    const saved =localStorage.getItem('todos');
    return saved ? JSON.parse(saved): [];
 }

function reducer(){}

 export const TodoProvider = ({Children}: {Children: Recat.ReactNode}) => {

    const [state, dispatch ] = useReducer(reducer,{todos: getInitialTodos(),

    });


 }