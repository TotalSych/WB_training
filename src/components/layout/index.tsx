import { useState } from "react";
import { Header } from "components/header";
import { ConfiguredRouter } from "router/router";
import { Aside } from "components/aside";
import styles from "./layout.module.scss";

export const Layout = () => {
  const [text, setText] = useState("");
  return (
    <div className={styles.layout}>
      <Header className={styles.layout__header} text={text} setText={setText} />
      <Aside className={styles.layout__aside} />
      <ConfiguredRouter />
    </div>
  );
};
