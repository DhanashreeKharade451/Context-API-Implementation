import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { ThemeType } from "../types";

interface ThemeContextType {
    theme: ThemeType;
    toggleTheme: () => void;
}
 
const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {}