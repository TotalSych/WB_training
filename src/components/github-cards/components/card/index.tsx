import React from "react";
import { GithubRepo } from "types/github-repo";
import { CardDrawer } from "./components/card-drawer";
import styles from "./index.module.scss";

type RepoCardsProps = {
  repo: Partial<GithubRepo>;
};

const RepoCards: React.FC<RepoCardsProps> = ({ repo }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <div className={styles["repo-card"]} onClick={() => setIsOpen(true)}>
        <p>{repo.full_name}</p>
        <p> {repo.language}</p>
        <p>Visibility: {repo.visibility}</p>
        <a href={repo.url} target="_blank" rel="noopener noreferrer">
          Link to repo
        </a>
        <p>{repo.created_at}</p>
      </div>
      <CardDrawer open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default RepoCards;
