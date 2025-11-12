import React from 'react';
import SeparatorIcon from '../common/separatorIcon';
import IconBrutalism from '../../../assets/icons/Brutalism 27.svg';
import styles from './icons.module.scss';
import SquareIcon from '../common/squareIcon';

interface IconsProps {
  className?: string;
}

const Icons: React.FC<IconsProps> = ({ className }) => {
  return (
    <>
      <SeparatorIcon
        className={className}
        iconPath={IconBrutalism}
        iconAlt="Sun icon"
      />

      <div className={styles.iconRow}>
        <SquareIcon className={className} title="SquareIcon" iconPath={IconBrutalism} iconAlt="Brutalism27" />
        <p className={styles.iconText}>Lorem ipsum dolor sit amet</p>
      </div>

      <div className={styles.iconRow}>
        <SquareIcon className={className} title="SquareIcon" iconPath={IconBrutalism} iconAlt="Brutalism27" />
        <p className={styles.iconText}>Consectetur adipiscing elit</p>
      </div>

      <div className={styles.iconRow}>
        <SquareIcon className={className} title="SquareIcon" iconPath={IconBrutalism} iconAlt="Brutalism27" />
        <p className={styles.iconText}>Sed do eiusmod tempor</p>
      </div>
    </>
  );
};

export default Icons;
