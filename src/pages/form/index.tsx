import styles from "./index.module.scss";

export const FormPage = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.main__title}>Form page</h1>
      <form className={styles.main__form}>
        <div className={styles.main__content}>
          <label className={styles.main__label}>
            Fisrt Name:
            <input
              className={styles.main__input}
              type="text"
              placeholder="Ivan"
            />
          </label>
          <label className={styles.main__label}>
            Last Name:
            <input
              className={styles.main__input}
              type="text"
              placeholder="Ivanov"
            />
          </label>
          <label className={styles.main__label}>
            Patronymic:
            <input
              className={styles.main__input}
              type="text"
              placeholder="Ivanovich"
            />
          </label>
          <label className={styles.main__label}>
            Phone Number:
            <input
              className={styles.main__input}
              type="tel"
              placeholder="+7 XXX XXX XX XX"
            />
          </label>
        </div>
        <div className={styles.main__content}>
          <label className={styles.main__label}>
            Email:
            <input
              className={styles.main__input}
              type="email"
              placeholder="Ivan@example.com"
            />
          </label>
          <label className={styles.main__label}>
            Password:
            <input
              className={styles.main__input}
              type="password"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
            />
          </label>
          <label className={styles["main__label--checkbox"]}>
            <input type="checkbox" className={styles.main__checkbox} />
            Send me notifications
          </label>
        </div>
        <input className={styles.main__submit} type="submit" value="Submit" />
      </form>
    </div>
  );
};
