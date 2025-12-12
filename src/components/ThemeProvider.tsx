"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  fontSize: "small" | "medium" | "large";
  setFontSize: (size: "small" | "medium" | "large") => void;
  highContrast: boolean;
  toggleHighContrast: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [fontSize, setFontSize] = useState<"small" | "medium" | "large">("medium");
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    // Load saved preferences
    const savedTheme = localStorage.getItem("sahabat-katolik-theme") as Theme;
    const savedFontSize = localStorage.getItem("sahabat-katolik-font-size") as "small" | "medium" | "large";
    const savedHighContrast = localStorage.getItem("sahabat-katolik-high-contrast") === "true";

    if (savedTheme) setTheme(savedTheme);
    if (savedFontSize) setFontSize(savedFontSize);
    setHighContrast(savedHighContrast);

    // Apply theme to document
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
    document.documentElement.classList.toggle("high-contrast", savedHighContrast);
    document.documentElement.setAttribute("data-font-size", savedFontSize || "medium");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("sahabat-katolik-theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const handleSetFontSize = (size: "small" | "medium" | "large") => {
    setFontSize(size);
    localStorage.setItem("sahabat-katolik-font-size", size);
    document.documentElement.setAttribute("data-font-size", size);
  };

  const toggleHighContrast = () => {
    const newHighContrast = !highContrast;
    setHighContrast(newHighContrast);
    localStorage.setItem("sahabat-katolik-high-contrast", newHighContrast.toString());
    document.documentElement.classList.toggle("high-contrast", newHighContrast);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        fontSize,
        setFontSize: handleSetFontSize,
        highContrast,
        toggleHighContrast,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}