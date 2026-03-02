import { createContext, useContext,useState, Children,ReactNode } from "react";
import type{ FilterType } from "../types";


interface FilterContextType {
    filter : FilterType;
    setFilter: (filter: FilterType) => void;
}

const FilterContext = createContext<FilterContextType |null>(null);

export const FilterProvider = ({children}: {children: ReactNode }) => {
    const [filter, setFilter] = useState<FilterType>("all");

    return(
        <FilterContext.Provider value={{filter,setFilter}}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilter = () => {
    const context =useContext(FilterContext);
    if(!context) throw new Error("useFilter must be inside FilterProvider");
    return
}