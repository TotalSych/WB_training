import React, { useState } from "react";
import style from "./settings.module.scss";
import { useTheme } from "context/theme-context";

export const SettingsPage: React.FC = () => {
  const themeValues = useTheme();
  const setTheme = themeValues?.setTheme;

  const [backgroundTheme, setBackgroundTheme] = useState<string>(
    themeValues?.theme?.backgroundTheme || ""
  );
  const [colorTheme, setColorTheme] = useState<string>(
    themeValues?.theme?.colorTheme || ""
  );

  const changeBackgroundTheme = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBackgroundTheme(event.target.value);
    setTheme?.({ backgroundTheme: event.target.value, colorTheme });
  };

  const resetBackgroundTheme = () => {
    setBackgroundTheme("#fff");
    setTheme?.({ backgroundTheme: "#fff", colorTheme });
  };

  const changeColorTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColorTheme(event.target.value);
    setTheme?.({ backgroundTheme, colorTheme: event.target.value });
  };

  const resetColorTheme = () => {
    setColorTheme("#222");
    setTheme?.({ backgroundTheme, colorTheme: "#222" });
  };

  return (
    <div className={style.main}>
      <h1 className={style.main__title}>Settings page</h1>
      <div className={style.main__content}>
        <div className={style.main__content__buttonContainer}>
          <label
            className={style.main__content__buttonContainer__label}
            htmlFor="background-color-picker"
          >
            Background color:
          </label>
          <input
            id="background-color-picker"
            className={style.main__content__buttonContainer__colorPicker}
            type="color"
            value={backgroundTheme}
            onChange={changeBackgroundTheme}
          />
          <button
            className={style.main__content__buttonContainer__button}
            onClick={resetBackgroundTheme}
          >
            Reset
          </button>
        </div>
        <div className={style.main__content__buttonContainer}>
          <label
            className={style.main__content__buttonContainer__label}
            htmlFor="text-color-picker"
          >
            Text color:
          </label>
          <input
            id="text-color-picker"
            className={style.main__content__buttonContainer__colorPicker}
            type="color"
            value={colorTheme}
            onChange={changeColorTheme}
          />
          <button
            className={style.main__content__buttonContainer__button}
            onClick={resetColorTheme}
          >
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
