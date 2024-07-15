import { InputHTMLAttributes } from "react";
import styles from "./index.module.scss";
import cn from "classnames";

interface IProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  labelName: string;
  labelClassName?: string;
  register?: InputHTMLAttributes<HTMLInputElement>;
}

export const Checkbox = ({
  labelName,
  labelClassName,
  register,
  ...inputProps
}: IProps) => {
  return (
    <label className={cn(styles.label, labelClassName)}>
      <input className={styles.label__checkbox} {...inputProps} {...register} />
      {labelName}
    </label>
  );
};
