import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./index.module.scss";

interface IProps {
  githubNickname: string;
  setGithubNickname: (value: string) => void;
}

const DebouncedInputValue: React.FC<IProps> = ({
  setGithubNickname,
  githubNickname,
}) => {
  const [inputValue, setInputValue] = useState(githubNickname);
  const [debouncedInputValue, setDebouncedInputValue] =
    useState(githubNickname);

  useEffect(() => {
    const debounceTimeoutId = setTimeout(() => {
      setGithubNickname(debouncedInputValue);
    }, 1000);

    return () => clearTimeout(debounceTimeoutId);
  }, [debouncedInputValue, setGithubNickname]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setDebouncedInputValue(event.target.value);
  };

  return (
    <input
      className={styles.input}
      type="text"
      value={inputValue}
      onChange={handleChange}
    />
  );
};

export default DebouncedInputValue;
