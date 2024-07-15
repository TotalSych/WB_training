import { Drawer } from "components/drawer";
import styles from "./index.module.scss";
import { fetchRepoByName } from "api";
import { useEffect, useState } from "react";
import { Loader } from "components/loader";
import { Main } from "components/main";

interface IProps {
  open: boolean;
  onClose: () => void;
  repoName?: string;
  githubNickname: string;
}

export const CardDrawer = (props: IProps) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [repoDetails, setRepoDetails] = useState<any>(null);

  useEffect(() => {
    const fetchRepoAndUpdateState = async () => {
      if (props.repoName) {
        try {
          setIsLoading(true);
          const response = await fetchRepoByName(
            props.githubNickname,
            props.repoName
          );
          if (!response.ok) {
            throw new Error("Failed to fetch repo");
          }
          const repo = await response.json();
          setRepoDetails(repo);
          setError(null);
        } catch (error: any) {
          setRepoDetails(null);
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchRepoAndUpdateState();
  }, [props.githubNickname, props.repoName]);

  return (
    <Drawer isOpen={props.open} position="right" onClose={props.onClose}>
      {isLoading ? (
        <Main>
          <Loader />
        </Main>
      ) : error ? (
        <Main>
          <p className={styles.error}>{error}</p>
        </Main>
      ) : (
        <div className={styles["drawer-content"]}>
          <p>Description: {repoDetails?.description}</p>
          <p>HTML URL: {repoDetails?.html_url}</p>
          <p>Commits URL: {repoDetails?.commits_url}</p>
          <button
            className={styles["drawer-content__button"]}
            type="button"
            onClick={props.onClose}
          >
            Close
          </button>
        </div>
      )}
    </Drawer>
  );
};
