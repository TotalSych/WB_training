import { Header } from "components/header";
import { Loader } from "components/loader";
import { Main } from "components/main";
import { Repos } from "components/repos";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { fetchRepos } from "api";

export const PromisePage = () => {
  const [repos, setRepos] = useState([]);
  const [githubNickname, setGithubNickname] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchReposAndUpdateState = () => {
      if (!githubNickname) {
        return;
      }

      setIsLoading(true);
      fetchRepos(githubNickname)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch repos");
          }
          return response.json();
        })
        .then((repos) => {
          setRepos(repos);
          setError(null);
        })
        .catch((error) => {
          setRepos([]);
          setError(error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    fetchReposAndUpdateState();
  }, [githubNickname]);

  return (
    <>
      <Header
        githubNickname={githubNickname}
        setGithubNickname={setGithubNickname}
        title="Promise"
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
        <Repos repos={repos} githubNickname={githubNickname} />
      )}
    </>
  );
};
