import { Header } from "components/header";
import { Repos } from "components/repos";
import { useState } from "react";
import { GithubRepo } from "types/github-repo";

type PromisePageProps = {
  repos: Partial<GithubRepo>[];
};

export const PromisePage: React.FC<PromisePageProps> = ({ repos }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <Header text={text} setText={setText} title="Promise" />
      <Repos repos={repos} />
    </div>
  );
};
