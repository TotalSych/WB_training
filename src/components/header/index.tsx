import styles from "./header.module.scss";
import cn from "classnames";

interface IProps {
  className?: string;
  text: string;
  setText: (value: string) => void;
  title: string;
}

export const Header = ({ setText, text, className, title }: IProps) => {
  return (
    <header className={cn(styles.header, className)}>
      <div>
        {title}
        <br />
        Request
      </div>
      <input
        className={cn(styles.header__input)}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </header>
  );
};
