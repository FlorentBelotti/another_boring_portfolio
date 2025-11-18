import React from 'react';
import SeparatorIcon from '../../common/separatorIcon';
import IconBrutalism from '../../../../assets/icons/Brutalism 27.svg';
import styles from './icons.module.scss';
import SquareIcon from '../../common/squareIcon';

interface IconsProps {
  className?: string;
}

const Icons: React.FC<IconsProps> = ({ className }) => {
  return (
    <div className={styles.container}>
      <SeparatorIcon
        className={className}
        iconPath={IconBrutalism}
        iconAlt="Sun icon"
      />

      <div className={styles.iconRow}>
        <SquareIcon className={className} title="SquareIcon" iconPath={IconBrutalism} iconAlt="Brutalism27" text="Ceci est un test" />
      </div>

      <div className={styles.iconRow}>
        <SquareIcon className={className} title="SquareIcon" iconPath={IconBrutalism} iconAlt="Brutalism27" text="Ceci est un second test"/>
      </div>

      <div className={styles.iconRow}>
        <SquareIcon className={className} title="SquareIcon" iconPath={IconBrutalism} iconAlt="Brutalism27" text="Ceci est un troisième test" />
      </div>
    </div>
  );
};

export default Icons;
