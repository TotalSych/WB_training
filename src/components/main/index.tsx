import styles from "./main.module.scss";

interface IProps {
  children: React.ReactNode;
}

export const Main = (props: IProps) => {
  return <div className={styles.main}>{props.children}</div>;
};
