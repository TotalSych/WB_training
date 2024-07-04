import { Aside } from "components/aside";
import { ConfiguredRouter } from "router/router";
import styles from "./layout.module.scss";

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Aside className={styles.layout__aside} />
      <div className={styles["layout__content-wrapper"]}>
        <div className={styles.layout__content}>
          <ConfiguredRouter />
        </div>
      </div>
    </div>
  );
};
