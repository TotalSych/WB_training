import Styles from "./switch.module.scss";

interface IProps {
  onChange: () => void;
}

export const Switch: React.FC<IProps> = (props) => {
  return (
    <label className={Styles.switch}>
      <input type="checkbox" onChange={props.onChange} />
      <span className={Styles.slider + " " + Styles.round}></span>
    </label>
  );
};
