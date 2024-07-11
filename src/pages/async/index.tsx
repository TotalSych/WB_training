import { fetchRepos } from "api";
import { Header } from "components/header";
import { Loader } from "components/loader";
import { Main } from "components/main";
import { Repos } from "components/repos";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";

export const AsyncPage = () => {
  const [repos, setRepos] = useState([]);
  const [githubNickname, setGithubNickname] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchReposAndUpdateState = async () => {
      if (!githubNickname) {
        return;
      }

      try {
        setIsLoading(true);
        const response = await fetchRepos(githubNickname);
        if (!response.ok) {
          throw new Error("Failed to fetch repos");
        }
        const repos = await response.json();
        setRepos(repos);
        setError(null);
      } catch (error: any) {
        setRepos([]);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReposAndUpdateState();
  }, [githubNickname]);

  return (
    <>
      <Header
        githubNickname={githubNickname}
        setGithubNickname={setGithubNickname}
        title="Async"
      />
      {isLoading ? (
        <Main>
          <Loader />
        </Main>
      ) : error ? (
        <Main>
          <p className={styles.error}>{error}</p>
        </Main>
      ) : (
        <Repos repos={repos} />
      )}
    </>
  );
};
