import { defaultThemeValues, useTheme } from "context/theme-context";
import React from "react";
import styles from "./settings.module.scss";

export const SettingsPage: React.FC = () => {
  const { theme, setTheme } = useTheme() ?? {};

  const changeBackgroundTheme = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTheme?.({ backgroundTheme: event.target.value });
  };

  const resetBackgroundTheme = () => {
    setTheme?.({ backgroundTheme: defaultThemeValues.backgroundTheme });
  };

  const changeColorTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme?.({ colorTheme: event.target.value });
  };

  const resetColorTheme = () => {
    setTheme?.({ colorTheme: defaultThemeValues.colorTheme });
  };

  console.log(theme);

  return (
    <div className={styles.main}>
      <h1 className={styles.main__title}>Settings page</h1>
      <div className={styles.main__content}>
        <div className={styles["main__button-container"]}>
          <label
            className={styles["main__button-label"]}
            htmlFor="background-color-picker"
          >
            Background color:
          </label>
          <input
            id="background-color-picker"
            className={styles["main__color-picker"]}
            type="color"
            value={theme?.backgroundTheme}
            onChange={changeBackgroundTheme}
          />
          <button
            className={styles.main__button}
            onClick={resetBackgroundTheme}
          >
            Reset
          </button>
        </div>
        <div className={styles["main__button-container"]}>
          <label
            className={styles["main__button-label"]}
            htmlFor="text-color-picker"
          >
            Text color:
          </label>
          <input
            id="text-color-picker"
            className={styles["main__color-picker"]}
            type="color"
            value={theme?.colorTheme}
            onChange={changeColorTheme}
          />
          <button className={styles.main__button} onClick={resetColorTheme}>
            Reset
          </button>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quaerat
        quas quis magni quod odit aut dicta nulla. Quas, optio facilis.
        Consequatur laudantium, soluta nulla deleniti quis vitae et aliquam?
      </p>
    </div>
  );
};
