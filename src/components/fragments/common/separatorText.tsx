import React from 'react';
import styles from './separatorText.module.scss';

interface SeparatorTextProps {
  className?: string;
  title: string;
}

const SeparatorText: React.FC<SeparatorTextProps> = ({ className, title }) => {
  return (
    <div className={`${styles.separator} ${className || ''}`}>
      <div className={styles.diamond}></div>
      <div className={styles.line}></div>
      <div className={styles.title}>{title}</div>
      <div className={styles.line}></div>
      <div className={styles.diamond}></div>
    </div>
  );
};

export default SeparatorText;