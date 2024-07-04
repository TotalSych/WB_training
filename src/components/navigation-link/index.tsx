import { NavLink, useNavigate } from "react-router-dom";
import styles from "./navigation-link.module.scss";
import cn from "classnames";
import { PATHS } from "router/paths";

export const NavigationLink = () => {
  const navigate = useNavigate();

  const handlePrevClick = () => {
    navigate(-1);
  };

  const handleNextClick = () => {
    navigate(1);
  };

  return (
    <nav className={styles.navigation}>
      <NavLink
        className={({ isActive }) =>
          cn(styles.navigation__link, { [styles.navigation__active]: isActive })
        }
        to={PATHS.ASYNC}
      >
        Async
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          cn(styles.navigation__link, { [styles.navigation__active]: isActive })
        }
        to={PATHS.PROMISE}
      >
        Promise
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          cn(styles.navigation__link, { [styles.navigation__active]: isActive })
        }
        to={PATHS.SETTINGS}
      >
        Settings
      </NavLink>
      <div className={styles.navigation__buttons}>
        <button className={styles.navigation__button} onClick={handlePrevClick}>
          &lt;
        </button>
        <button className={styles.navigation__button} onClick={handleNextClick}>
          &gt;
        </button>
      </div>
    </nav>
  );
};
