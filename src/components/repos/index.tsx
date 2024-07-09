import CardsContainer from "components/github-cards";
import { UserInfo } from "components/github-cards/components/user-info";
import { Main } from "components/main";
import { GithubRepo } from "types/github-repo";

type ReposProps = {
  repos: Partial<GithubRepo>[];
};

export const Repos: React.FC<ReposProps> = ({ repos }) => {
  return (
    <Main>
      <UserInfo owner={repos?.[0]?.owner}></UserInfo>
      <CardsContainer repos={repos} />
    </Main>
  );
};
