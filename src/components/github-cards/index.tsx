import React from "react";
import RepoCard from "./components/card";
import { GithubRepo } from "types/github-repo";
import styles from "./index.module.scss";
import cn from "classnames";

type GithubCardsProps = {
  repos: Partial<GithubRepo>[];
};

const GithubCards: React.FC<GithubCardsProps> = ({ repos }) => {
  return (
    <div
      className={cn(
        styles["cards-container"],
        styles["cards-container__content"]
      )}
    >
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
};
export default GithubCards;
