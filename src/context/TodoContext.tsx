import { 
    createContext, 
    useContext, 
    useReducer, 
    useEffect,
     useMemo

 } from "react";
 import { Todo } from "../types";

 
 type State = {
    todos: Todo[];
 };

 type Action = 
 |{type: 'ADD'; payload: string}
 |{type: 'TOGGLE'; payload: string}
 |{type: 'DELETE'; payload: string}
 |{type: 'EDIT'; payload: string}
 |{type: 'CLEAR_COMPLETED'; payload: string}
 |