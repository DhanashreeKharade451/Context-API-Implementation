import { 
    createContext, 
    useContext, 
    useReducer, 
    useEffect,
     useMemo,
     Children

 } from "react";
 import { Todo } from "../types";

 
 type State = {
    todos: Todo[];
 };

 type Action = 
 |{type: 'ADD'; payload: string}
 |{type: 'TOGGLE'; payload: string}
 |{type: 'DELETE'; payload: string}
 |{type: 'EDIT'; payload:{ id: string; text: string }}
 |{type: 'CLEAR_COMPLETED'; payload: string};

 const TodoContext = createContext<{
    todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
  clearCompleted: () => void;
 }| null >(null);


 const getInitialTodos
 export const TodoProvider = ({Children}: {Children: Recat.ReactNode}) => {

    const [state, dispatch ] = useReducer(reducer,{todos: getInitialTodos(),

    })
 }