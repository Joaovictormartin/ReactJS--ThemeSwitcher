import { ThemeProvider } from "styled-components";
import React, { createContext, useState, useContext } from "react";

import { lightTheme, darkTheme } from "../styles/theme";

interface IThemeContext {
  toggleTheme: () => void;
  isDarkMode: "light" | "dark";
}

const valueInitial: IThemeContext = {
  isDarkMode: "light",
  toggleTheme: () => {},
};

const ThemeContext = createContext<IThemeContext>(valueInitial);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error("error context");
  return context;
};

export const ProviderThemeContext: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<"light" | "dark">("light");

  const toggleTheme = () => setIsDarkMode((state) => (state === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      <ThemeProvider theme={isDarkMode === "light" ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
