import { Header } from "components/header";
import { Repos } from "components/repos";
import { useState } from "react";
import { GithubRepo } from "types/github-repo";

type AsyncPageProps = {
  repos: Partial<GithubRepo>[];
};

export const AsyncPage: React.FC<AsyncPageProps> = ({ repos }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <Header text={text} setText={setText} title="Async" />
      <Repos repos={repos} />
    </div>
  );
};
