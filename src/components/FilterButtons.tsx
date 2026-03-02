import { useFilter } from "../context/FilterContext";
import type { FilterType } from "../types";

export const FilterButtons = () => {
    const [filter, setFilter]: any = useFilter();

    const filters: FilterType[] = ["all", "active", "completed"];

    return(
        <div className="flex justify-center gap-3 mb-6">
            {filters.map((item) => (
                <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-3 py-1 rounded-md text-sm capitalize}
                ${filter === item ? 
                    "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"

                }`}
                >
                {item}
            </button>
            ))}
            
        </div>
    )
}