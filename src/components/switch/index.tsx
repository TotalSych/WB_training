import styles from "./index.module.scss";

interface IProps {
  onChange: () => void;
}

export const Switch = (props: IProps) => {
  return (
    <label className={styles.switch}>
      <input
        className={styles.switch__input}
        type="checkbox"
        onChange={props.onChange}
      />
      <span className={styles.switch__slider}></span>
    </label>
  );
};
