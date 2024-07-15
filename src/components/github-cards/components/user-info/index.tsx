import { GithubRepo } from "types/github-repo";
import styles from "./index.module.scss";
interface IProps {
  owner: Partial<GithubRepo>["owner"];
}

export const UserInfo = (props: IProps) => {
  return (
    <div className={styles["user-info"]}>
      {props.owner?.avatar_url && (
        <img
          className={styles["user-info__avatar"]}
          src={props.owner?.avatar_url}
          alt="User avatar"
        />
      )}
      {props.owner?.login}
    </div>
  );
};
