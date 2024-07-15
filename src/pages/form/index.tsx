import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./index.module.scss";
import { Input } from "components/input";
import { Checkbox } from "components/github-cards/components/checkbox";

export const FormPage = () => {
  interface FormFields {
    firstName: string;
    lastName: string;
    patronymic: string;
    phoneNumber: string;
    email: string;
    password: string;
    checkbox: boolean;
  }

  const { register, handleSubmit } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };
  useEffect(() => {
    return () => {
      console.log("FormPage unmount");
    };
  }, []);
  return (
    <div className={styles.main}>
      <h1 className={styles.main__title}>Form page</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.main__form}>
        <div className={styles.main__content}>
          <Input
            labelName="First Name:"
            placeholder="Ivan"
            register={register("firstName")}
          />
          <Input
            labelName="Last Name:"
            placeholder="Ivanov"
            register={register("lastName")}
          />
          <Input
            labelName="Patronymic:"
            placeholder="Ivanovich"
            register={register("patronymic")}
          />
          <Input
            labelName="Phone Number:"
            type="tel"
            placeholder="+7 XXX XXX XX XX"
            register={register("phoneNumber")}
          />
        </div>
        <div className={styles.main__content}>
          <Input
            labelName="Email:"
            type="email"
            placeholder="Something@example.com"
            register={register("email")}
          />
          <Input
            labelName="Password:"
            type="password"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
            register={register("password")}
          />

          <Checkbox
            labelName="Send me notifications"
            type="checkbox"
            register={register("checkbox")}
          />
        </div>
        <input className={styles.main__submit} type="submit" value="Submit" />
      </form>
    </div>
  );
};
