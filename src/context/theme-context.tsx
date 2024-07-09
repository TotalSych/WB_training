import React, { createContext, useContext, useState } from "react";

interface ITheme {
  theme: Partial<{
    backgroundTheme: string;
    colorTheme: string;
  }>;
  setTheme: (value: ITheme["theme"]) => void;
}

const ThemeContext = createContext<ITheme | null>(null);

export const defaultThemeValues: ITheme["theme"] = {
  backgroundTheme: "#fff",
  colorTheme: "#222",
};

interface IProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: IProps) => {
  const [theme, setTheme] = useState(defaultThemeValues);

  const setThemeHandler = (value: ITheme["theme"]) => {
    setTheme((prevValue) => {
      return { ...prevValue, ...value };
    });
    if (value?.backgroundTheme) {
      document.documentElement.style.setProperty(
        "--background-theme",
        value.backgroundTheme
      );
    }
    if (value?.colorTheme) {
      document.documentElement.style.setProperty(
        "--color-theme",
        value.colorTheme
      );
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
