import React, { createContext, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState("normal");

  const updateTheme = (themeName) => {
    setThemeName(themeName);
  };

  return (
    <ThemeContext.Provider value={{ themeName, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
