import { Drawer } from "components/drawer";
import React from "react";
import { mockRepos } from "types";
import styles from "./index.module.scss";

type CardDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export const CardDrawer: React.FC<CardDrawerProps> = ({ open, onClose }) => {
  return (
    <Drawer isOpen={open} position="right" onClose={onClose}>
      <div className={styles["drawer-content"]}>
        <p>Description: {mockRepos[0].description}</p>
        <p>HTML URL: {mockRepos[0].html_url}</p>
        <p>Commits URL: {mockRepos[0].commits_url}</p>
        <button
          className={styles["drawer-content__button"]}
          type="button"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </Drawer>
  );
};
