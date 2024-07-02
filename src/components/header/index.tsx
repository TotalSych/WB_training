import styles from "./header.module.scss";
import cn from "classnames";

interface IProps {
  className?: string;
  text: string;
  setText: (value: string) => void;
}

export const Header = ({ setText, text, className }: IProps) => {
  return (
    <header className={cn(styles.header, className)}>
      <div>
        Async
        <br />
        Request
      </div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </header>
  );
};
