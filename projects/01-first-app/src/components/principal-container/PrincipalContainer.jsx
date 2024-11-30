import styles from './PrincipalContainer.module.scss';

import React from "react";
import { LeftContainer } from "../left-container/LeftContainer";
import { RightContainer } from '../right-container/RightContainer';

export const PrincipalContainer = () => {
  return (
    <div className={styles.container}>
      <div>Principal Container</div>
      <div className={styles.content}>
        <LeftContainer />
        <RightContainer />
      </div>
    </div>
  );
}