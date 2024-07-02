import Styles from "./switch.module.scss";

export const Switch = () => {
  return (
    <label className={Styles.switch}>
      <input type="checkbox" />
      <span className={Styles.slider + " " + Styles.round}></span>
    </label>
  );
};
