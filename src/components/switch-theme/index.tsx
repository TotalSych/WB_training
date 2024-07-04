import { Switch } from "components/switch";
import { useTheme } from "context/theme-context";

export const SwitchTheme = () => {
  const themeValues = useTheme();
  const setTheme = themeValues?.setTheme;
  const { backgroundTheme, colorTheme } = themeValues?.theme ?? {};

  const handleChange = () => {
    const swappedTheme = {
      backgroundTheme: colorTheme || "",
      colorTheme: backgroundTheme || "",
    };
    setTheme?.(swappedTheme);
  };

  return <Switch onChange={handleChange} />;
};
