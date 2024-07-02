import React from "react";
import { GithubRepo } from "types/github-repo";
import styles from "./cards.module.scss";

type RepoCardsProps = {
  repo: Partial<GithubRepo>;
};

const RepoCards: React.FC<RepoCardsProps> = ({ repo }) => {
  return (
    <div className={styles.repoCard}>
      <p>{repo.full_name}</p>
      <p> {repo.language}</p>
      <p>Visibility: {repo.visibility}</p>
      <a href={repo.url} target="_blank" rel="noopener noreferrer">
        Link to repo
      </a>
      <p>{repo.created_at}</p>
    </div>
  );
};

export default RepoCards;
