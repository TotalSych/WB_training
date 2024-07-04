import CardsContainer from "components/github-cards/cardsContainer";
import { UserInfo } from "components/github-cards/userInfo";
import { Main } from "components/main";
import { useState } from "react";
import { GithubRepo } from "types/github-repo";
import styles from "../../components/layout/layout.module.scss";
import { Header } from "components/header";

type PromisePageProps = {
  repos: Partial<GithubRepo>[];
};

export const PromisePage: React.FC<PromisePageProps> = ({ repos }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <Header
        className={styles.layout__header}
        text={text}
        setText={setText}
        title="Promise"
      />
      <Main>
        <UserInfo repos={repos}></UserInfo>
        <CardsContainer repos={repos} />
      </Main>
    </div>
  );
};
