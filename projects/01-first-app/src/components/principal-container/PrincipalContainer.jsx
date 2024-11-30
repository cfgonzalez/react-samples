import styles from './PrincipalContainer.module.scss';

import React from "react";
import { LeftContainer } from "../left-container/LeftContainer";

export const PrincipalContainer = () => {
  return (
    <div className={styles.container}>
      <div>Principal Container</div>
      <div>
        <LeftContainer />
      </div>
    </div>
  );
}