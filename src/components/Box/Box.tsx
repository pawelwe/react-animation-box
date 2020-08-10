import React from 'react';
import styles from './Box.scss';

export const Box: React.FC = ({ children }) => {
  return (
    <div className={styles['box']}>
      <p>{children}</p>
    </div>
  );
};
