import { GithubRepo } from "types/github-repo";
import styles from "./userInfo.module.scss";
import cn from "classnames";

type UserInfoProps = {
  repos: Partial<GithubRepo>[];
};

export const UserInfo: React.FC<UserInfoProps> = ({ repos }) => {
  return (
    <div className={cn(styles.userInfo)}>
      {repos?.[0]?.owner?.avatar_url && (
        <img
          className={styles.userInfo__avatar}
          src={repos?.[0]?.owner?.avatar_url}
          alt="User avatar"
        />
      )}
      {repos?.[0]?.owner?.login}
    </div>
  );
};
