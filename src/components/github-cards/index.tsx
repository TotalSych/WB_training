import cn from "classnames";
import { useState } from "react";
import { GithubRepo } from "types/github-repo";
import { RepoCard } from "./components/card";
import { CardDrawer } from "./components/card/components/card-drawer";
import styles from "./index.module.scss";

interface IProps {
  repos: Partial<GithubRepo>[];
  githubNickname: string;
}

export const GithubCards = (props: IProps) => {
  const [currentRepoName, setCurrentRepoName] = useState<string | undefined>();

  return (
    <div
      className={cn(
        styles["cards-container"],
        styles["cards-container__content"]
      )}
    >
      {props.repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} onClick={setCurrentRepoName} />
      ))}
      <CardDrawer
        open={Boolean(currentRepoName)}
        onClose={() => setCurrentRepoName(undefined)}
        repoName={currentRepoName}
        githubNickname={props.githubNickname}
      />
    </div>
  );
};
