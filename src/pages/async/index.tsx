import CardsContainer from "components/github-cards";
import { UserInfo } from "components/github-cards/components/user-info";
import { Header } from "components/header";
import { Main } from "components/main";
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
      <Main>
        <UserInfo repos={repos}></UserInfo>
        <CardsContainer repos={repos} />
      </Main>
    </div>
  );
};
