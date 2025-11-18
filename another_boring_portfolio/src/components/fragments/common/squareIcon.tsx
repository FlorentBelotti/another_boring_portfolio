import React from 'react';
import styles from './squareIcon.module.scss';

interface SquareIconProps {
  className?: string;
  title?: string;
  iconPath: string;
  iconAlt?: string;
  text?: string;
}

const SquareIcon: React.FC<SquareIconProps> = ({ className, title, iconPath, iconAlt = 'icon', text }) => {
  return (
    <div className={`${styles.container} ${className || ''}`} title={title}>
      <div className={styles.square}>
        <img src={iconPath} alt={iconAlt} className={styles.icon} />
      </div>
      {text && <span className={styles.text}>{text}</span>}
    </div>
  );
};

export default SquareIcon;
