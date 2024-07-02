import { useState } from "react";
import { Header } from "components/header";
import { ConfiguredRouter } from "router/router";
import { Aside } from "components/aside";
import styles from "./layout.module.scss";

export const Layout = () => {
    const [ text, setText ] = useState("");
    return (
        <div className={styles.layout}>
            <Aside className={styles.layout__aside}/>
            <div className={styles['layout__content-wrapper']}>
                <Header className={styles.layout__header} text={text} setText={setText}/>
                <div className={styles.layout__content}>
                    <ConfiguredRouter/>
                </div>
            </div>
        </div>
    );
};
