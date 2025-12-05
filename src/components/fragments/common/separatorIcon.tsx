import React from 'react';
import styles from './separatorIcon.module.scss';

interface SeparatorIconProps {
  className?: string;
  iconPath: string;
  iconAlt?: string;
}

const SeparatorIcon: React.FC<SeparatorIconProps> = ({ className, iconPath, iconAlt = 'icon' }) => {
  return (
    <div className={`${styles.separator} ${className || ''}`}>
      <div className={styles.diamond}></div>
      <div className={styles.line}></div>
      <div className={styles.iconWrapper}>
        <img src={iconPath} alt={iconAlt} className={styles.icon} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.diamond}></div>
    </div>
  );
};

export default SeparatorIcon;
