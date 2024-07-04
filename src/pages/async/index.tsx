import CardsContainer from "components/github-cards/cardsContainer";
import { UserInfo } from "components/github-cards/userInfo";
import { Header } from "components/header";
import { Main } from "components/main";
import { useState } from "react";
import { GithubRepo } from "types/github-repo";
import styles from "../../components/layout/layout.module.scss";

type AsyncPageProps = {
  repos: Partial<GithubRepo>[];
};

export const AsyncPage: React.FC<AsyncPageProps> = ({ repos }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <Header
        className={styles.layout__header}
        text={text}
        setText={setText}
        title="Async"
      />
      <Main>
        <UserInfo repos={repos}></UserInfo>
        <CardsContainer repos={repos} />
      </Main>
    </div>
  );
};
