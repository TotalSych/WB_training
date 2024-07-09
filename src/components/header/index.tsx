import cn from "classnames";
import DebouncedInputValue from "components/debounced-input";
import styles from "./index.module.scss";

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
      <DebouncedInputValue text={text} setText={setText} />
    </header>
  );
};
