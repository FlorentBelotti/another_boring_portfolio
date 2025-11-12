import React from 'react';
import styles from './squareIcon.module.scss';

interface SquareIconProps {
  className?: string;
  title?: string;
  iconPath: string;
  iconAlt?: string;
}

const SquareIcon: React.FC<SquareIconProps> = ({ className, title, iconPath, iconAlt = 'icon' }) => {
  return (
    <div className={`${styles.square} ${className || ''}`} title={title}>
      <img src={iconPath} alt={iconAlt} className={styles.icon} />
    </div>
  );
};

export default SquareIcon;
