import React, { createContext, useContext, useState } from "react";

interface ITheme {
  theme: {
    backgroundTheme: string;
    colorTheme: string;
  };
  setTheme: (value: ITheme["theme"]) => void;
}

const ThemeContext = createContext<ITheme | null>(null);

interface IProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: IProps) => {
  const [theme, setTheme] = useState({
    backgroundTheme: "#fff",
    colorTheme: "#222",
  });

  const setThemeHandler = (value: ITheme["theme"]) => {
    setTheme(value);
    document.documentElement.style.setProperty(
      "--background-theme",
      value.backgroundTheme
    );
    document.documentElement.style.setProperty(
      "--color-theme",
      value.colorTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
