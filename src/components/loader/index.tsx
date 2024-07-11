import { useState, useEffect } from "react";
import styles from "./index.module.scss";

export function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <div className={styles.loader__spinner}></div>
      </div>
    );
  }

  return null;
}
