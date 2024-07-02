import CardsContainer from "components/github-cards/cardsContainer";
import { UserInfo } from "components/github-cards/userInfo";
import { Main } from "components/main";
import { GithubRepo } from "types/github-repo";

type PromisePageProps = {
  repos: Partial<GithubRepo>[];
};

export const PromisePage: React.FC<PromisePageProps> = ({ repos }) => {
  return (
    <Main>
      <UserInfo repos={repos}></UserInfo>
      <CardsContainer repos={repos} />
    </Main>
  );
};
