import cn from "classnames";
import { SwitchTheme } from "components/switch-theme";
import styles from "./aside.module.scss";
import { NavigationLink } from "components/navigation-link";

interface IProps {
  className?: string;
}

export const Aside = ({ className }: IProps) => {
  return (
    <aside className={cn(styles.aside, className)}>
      <NavigationLink />
      <SwitchTheme />
    </aside>
  );
};
