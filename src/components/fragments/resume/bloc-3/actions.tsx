import React from 'react';

import IconBrutalism from '../../../../assets/icons/Brutalism 27.svg';
import styles from './actions.module.scss';
import SquareIcon from '../../common/squareIcon';

interface ActionsProps {
  className?: string;
}

const Actions: React.FC<ActionsProps> = ({ className }) => {
  return (
    <div className={styles.container}>

      <div className={styles.iconRow}>
        <SquareIcon className={className} title="SquareIcon" iconPath={IconBrutalism} iconAlt="Brutalism27" />
      </div>

      <div className={styles.iconRow}>
        <SquareIcon className={className} title="SquareIcon" iconPath={IconBrutalism} iconAlt="Brutalism27"/>
      </div>
    </div>
  );
};

export default Actions;
