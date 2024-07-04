import React, { ChangeEvent, useState, useEffect } from "react";
import styles from "./header.module.scss";
import cn from "classnames";

interface IProps {
  className?: string;
  text: string;
  setText: (value: string) => void;
  title: string;
}

export const Header = ({ setText, text, className, title }: IProps) => {
  const [inputValue, setInputValue] = useState(text);
  const [debouncedInputValue, setDebouncedInputValue] = useState(text);

  useEffect(() => {
    const debounceTimeoutId = setTimeout(() => {
      setText(debouncedInputValue);
    }, 1000);

    return () => clearTimeout(debounceTimeoutId);
  }, [debouncedInputValue, setText]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setDebouncedInputValue(event.target.value);
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
        value={inputValue}
        onChange={handleChange}
      />
    </header>
  );
};
