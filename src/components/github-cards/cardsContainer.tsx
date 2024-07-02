import React from "react";
import RepoCards from "./cards";
import { GithubRepo } from "types/github-repo";
import layoutStyles from "../layout/layout.module.scss";
import styles from "./cardsContainer.module.scss";
import cn from "classnames";

type CardsContainerProps = {
  repos: Partial<GithubRepo>[];
};

const CardsContainer: React.FC<CardsContainerProps> = ({ repos }) => {
  return (
    <div className={cn(styles.cardsContainer, layoutStyles.layout__content)}>
      {repos.map((repo) => (
        <RepoCards key={repo.id} repo={repo} />
      ))}
    </div>
  );
};
export default CardsContainer;
