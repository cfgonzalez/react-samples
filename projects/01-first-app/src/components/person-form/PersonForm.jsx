import styles from './PersonForm.module.scss';

import React from "react";


export const PersonForm = ({width}) => {
  return(    
    <form id="personForm" autoComplete="off" className={styles.form}
      style={{width}}>
      <div className={styles.formContent}>
        <input id="name" type="text" />
        <input id="surname" type="text" />
      </div>          
      <div className={styles.formButtons}>
        <button>Ok</button>
        <button>Cancel</button>
      </div>
    </form>  
  );
}