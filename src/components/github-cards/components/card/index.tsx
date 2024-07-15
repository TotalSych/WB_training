import { GithubRepo } from "types/github-repo";
import styles from "./index.module.scss";

interface IProps {
  repo: Partial<GithubRepo>;
  onClick: (repoName: string) => void;
}

export const RepoCard = (props: IProps) => {
  return (
    <div>
      <div
        className={styles["repo-card"]}
        onClick={() => {
          if (props.repo.name) {
            props.onClick(props.repo.name);
          }
        }}
      >
        <p>{props.repo.full_name}</p>
        <p> {props.repo.language}</p>
        <p>Visibility: {props.repo.visibility}</p>
        <a href={props.repo.url} target="_blank" rel="noopener noreferrer">
          Link to repo
        </a>
        <p>{props.repo.created_at}</p>
      </div>
    </div>
  );
};

// repoName
// setRepoName
// repo.name
// передать в cardDrawer repoName
// Boolean(repo.name)
//
