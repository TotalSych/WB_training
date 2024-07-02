import styles from "./main.module.scss";

type MainProps = {
  children: React.ReactNode;
};

export const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <div className={styles.main}>
      <div className={styles.main__content}>{children}</div>
    </div>
  );
};
