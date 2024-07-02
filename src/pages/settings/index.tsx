import React from "react";
import style from "./settings.module.scss";

export const SettingsPage: React.FC = () => {
  return (
    <div className={style.main}>
      <h1 className={style.main__title}>Settings page</h1>
      <div className={style.main__content}>
        <div className={style.main__content__buttonContainer}>
          Here you can set your text color{" "}
          <input
            className={style.main__content__buttonContainer__colorPicker}
            type="color"
          />{" "}
          <button className={style.main__content__buttonContainer__button}>
            Reset
          </button>
        </div>
        <div className={style.main__content__buttonContainer}>
          Here you can set your background color{" "}
          <input
            className={style.main__content__buttonContainer__colorPicker}
            type="color"
          />{" "}
          <button className={style.main__content__buttonContainer__button}>
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
