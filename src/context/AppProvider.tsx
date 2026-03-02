import { ReactNode } from "react";
import { TodoProvider } from "./TodoContext";
import { FilterProvider } from "./FilterContext";
import { ThemeProvider } from "./ThemeContext";
import { useTodos } from "./TodoContext";


export const AppProvider = ({children}:{children: ReactNode}) => {
    return(
        <ThemeProvider>
            <TodoProvider>
                <FilterProvider>{children}</FilterProvider>
            </TodoProvider>
        </ThemeProvider>
    )
}