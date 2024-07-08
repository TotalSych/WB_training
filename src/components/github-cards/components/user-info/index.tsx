import { GithubRepo } from "types/github-repo";
import styles from "./index.module.scss";

type UserInfoProps = {
  repos: Partial<GithubRepo>[];
};

export const UserInfo: React.FC<UserInfoProps> = ({ repos }) => {
  const owner = repos?.[0]?.owner;

  return (
    <div className={styles["user-info"]}>
      {owner?.avatar_url && (
        <img
          className={styles["user-info__avatar"]}
          src={owner?.avatar_url}
          alt="User avatar"
        />
      )}
      {owner?.login}
    </div>
  );
};
