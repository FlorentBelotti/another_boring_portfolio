import React from 'react';
import styles from './squareIcon.module.scss';

interface SquareIconProps {
  className?: string;
  title?: string;
  iconPath?: string;        // reste optionnel
  deviconClass?: string;    // NEW
  iconAlt?: string;
  text?: string;
  customIcon?: React.ReactNode; // Ajouté
}

const SquareIcon: React.FC<SquareIconProps> = ({
  className,
  title,
  iconPath,
  deviconClass,
  iconAlt = 'icon',
  text,
  customIcon
}) => {
  return (
    <div className={`${styles.container} ${className || ''}`} title={title}>
      <div className={styles.square}>
        {customIcon ? (
          <span className={styles.icon}>{customIcon}</span>
        ) : deviconClass ? (
          <i className={`${deviconClass} ${styles.icon}`} aria-hidden="true"></i>
        ) : (
          <img src={iconPath!} alt={iconAlt} className={styles.icon} />
        )}
      </div>
      {text && <span className={styles.text}>{text}</span>}
    </div>
  );
};

export default SquareIcon;
