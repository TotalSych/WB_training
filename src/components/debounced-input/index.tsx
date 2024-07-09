import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./index.module.scss";

interface IProps {
  text: string;
  setText: (value: string) => void;
}

const DebouncedInputValue: React.FC<IProps> = ({ setText, text }) => {
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
    <input
      className={styles.input}
      type="text"
      value={inputValue}
      onChange={handleChange}
    />
  );
};

export default DebouncedInputValue;
