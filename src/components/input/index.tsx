import { InputHTMLAttributes } from "react";
import styles from "./index.module.scss";
import cn from "classnames";

interface IProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  labelName: string;
  labelClassName?: string;
  register?: InputHTMLAttributes<HTMLInputElement>;
}

export const Input = ({
  labelName,
  labelClassName,
  register,
  ...inputProps
}: IProps) => {
  return (
    <label className={cn(styles.input__label, labelClassName)}>
      {labelName}
      <input className={styles.input__input} {...inputProps} {...register} />
    </label>
  );
};
