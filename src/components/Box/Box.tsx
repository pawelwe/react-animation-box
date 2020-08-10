import React from 'react';
import styles from './Box.scss';

export const Box: React.FC = () => {
  return (
    <div className={styles['box']}>
      <p>Test BOX</p>
    </div>
  );
};
