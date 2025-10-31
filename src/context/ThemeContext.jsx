import { createContext, useContext, useState } from "react";

// 1️⃣ Create the context
const ThemeContext = createContext();

// 2️⃣ Create the provider
export const ThemeProvider = ({ children }) => {
  const [isDark, setDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3️⃣ Create a simple custom hook for convenience
export const useTheme = () => useContext(ThemeContext);
