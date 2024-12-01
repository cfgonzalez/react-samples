import styles from './PrincipalContainer.module.scss';

import { Counter } from '../counter/Counter';
import React from "react";


export const PrincipalContainer = () => {
  return (
    <div className={styles.container}>
      <div>Principal Container</div>
      <Counter />
    </div>    
  );
}