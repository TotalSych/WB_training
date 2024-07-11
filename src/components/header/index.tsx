import cn from "classnames";
import DebouncedInputValue from "components/debounced-input";
import styles from "./index.module.scss";

interface IProps {
  className?: string;
  githubNickname: string;
  setGithubNickname: (value: string) => void;
  title: string;
}

export const Header = ({
  setGithubNickname,
  githubNickname,
  className,
  title,
}: IProps) => {
  return (
    <header className={cn(styles.header, className)}>
      <div>
        {title}
        <br />
        Request
      </div>
      <DebouncedInputValue
        githubNickname={githubNickname}
        setGithubNickname={setGithubNickname}
      />
    </header>
  );
};
