import React from 'react';
import styles from './Separator.module.scss';

interface SeparatorProps {
  className?: string;
}

const Separator: React.FC<SeparatorProps> = ({ className }) => {
  return (
    <div className={`${styles.separator} ${className || ''}`}>
      <div className={styles.diamond}></div>
      <div className={styles.line}></div>
      <div className={styles.diamond}></div>
    </div>
  );
};

export default Separator;