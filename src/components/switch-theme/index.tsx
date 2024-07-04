import { Switch } from "components/switch";
import { useTheme } from "context/theme-context";

export const SwitchTheme = () => {
  const themeValues = useTheme();
  const theme = themeValues?.theme;
  const setTheme = themeValues?.setTheme;

  const handleChange = () => {
    if (setTheme) {
      const { backgroundTheme = "", colorTheme = "" } = theme || {};
      const swappedTheme = {
        backgroundTheme: colorTheme || "",
        colorTheme: backgroundTheme || "",
      };
      setTheme(swappedTheme);
    }
  };

  return <Switch onChange={handleChange} />;
};
