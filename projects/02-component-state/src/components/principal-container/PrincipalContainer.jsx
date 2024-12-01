import styles from './PrincipalContainer.module.scss';

import React from "react";
import { ObjectSample } from '../object-sample/ObjectSample';
import { Counter } from '../counter/Counter';


export const PrincipalContainer = () => {
  return (
    <div className={styles.container}>
      <div>Principal Container</div>
      <Counter />
      <ObjectSample />
    </div>    
  );
}