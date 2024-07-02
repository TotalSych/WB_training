import cn from "classnames";
import { NavLink, useNavigate } from "react-router-dom";
import { PATHS } from "router/paths";
import styles from "./aside.module.scss";
import { Switch } from "components/switch";

interface IProps {
  className?: string;
}

export const Aside = ({ className }: IProps) => {
  const navigate = useNavigate();

  const handlePrevClick = () => {
    navigate(-1);
  };

  const handleNextClick = () => {
    navigate(1);
  };

  return (
    <aside className={cn(styles.aside, className)}>
      <nav className={cn(styles.aside__navigation)}>
        <NavLink
          className={({ isActive }) =>
            cn(styles.aside__link, { [styles.aside__active]: isActive })
          }
          to={PATHS.ASYNC}
        >
          Async
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(styles.aside__link, { [styles.aside__active]: isActive })
          }
          to={PATHS.PROMISE}
        >
          Promise
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(styles.aside__link, { [styles.aside__active]: isActive })
          }
          to={PATHS.SETTINGS}
        >
          Settings
        </NavLink>
        <div className={styles.buttonsContainer}>
          <button className={styles.navigationButton} onClick={handlePrevClick}>
            &lt;
          </button>
          <button className={styles.navigationButton} onClick={handleNextClick}>
            &gt;
          </button>
        </div>
      </nav>
      <Switch />
    </aside>
  );
};
