import { ChangeEvent } from "react";
import styles from "./header.module.scss";
import cn from "classnames";

interface IProps {
  className?: string;
  text: string;
  setText: (value: string) => void;
  title: string;
}

export const Header = ({ setText, text, className, title }: IProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return (
    <header className={cn(styles.header, className)}>
      <div>
        {title}
        <br />
        Request
      </div>
      <input
        className={styles.header__input}
        type="text"
        value={text}
        onChange={handleChange}
      />
    </header>
  );
};
