import React from 'react';
import styles from './styles.scssm';

const Panel = ({ title, children }) => (
  <div className={styles.root}>
    <div className={styles.header}>
      {title}
    </div>
    <div className={styles.body}>
      {children}
    </div>
  </div>
);

export default Panel;
