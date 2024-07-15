import { GithubCards } from "components/github-cards";
import { UserInfo } from "components/github-cards/components/user-info";
import { Main } from "components/main";
import { GithubRepo } from "types/github-repo";

interface IProps {
  repos: Partial<GithubRepo>[];
  githubNickname: string;
}

export const Repos = (props: IProps) => {
  return (
    <Main>
      <UserInfo owner={props.repos?.[0]?.owner}></UserInfo>
      <GithubCards repos={props.repos} githubNickname={props.githubNickname} />
    </Main>
  );
};
