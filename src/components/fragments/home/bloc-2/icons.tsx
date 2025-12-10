import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTransitionStore } from '../../../../stores/transitionStore';
import SeparatorIcon from '../../common/separatorIcon';

import IconBrutalism from '../../../../assets/icons/Brutalism 105.svg';
import IconStack from '../../../../assets/icons/Bauhaus 34.svg';
import IconAuto from '../../../../assets/icons/Brutalism 21.svg';
import IconSoftware from '../../../../assets/icons/Brutalism 65.svg';

import styles from './icons.module.scss';
import SquareIcon from '../../common/squareIcon';

interface IconsProps {
  className?: string;
}

const Icons: React.FC<IconsProps> = ({ className }) => {
  const navigate = useNavigate();
  const { startTransition, endTransition } = useTransitionStore();

  const handleNavigation = useCallback((url: string) => {
    startTransition();
    setTimeout(() => {
      navigate(url);
    }, 500);
    setTimeout(() => {
      endTransition();
    }, 1200);
  }, [navigate, startTransition, endTransition]);

  return (
    <div className={styles.container}>
      <SeparatorIcon
        className={className}
        iconPath={IconBrutalism}
        iconAlt="Circles"
      />

      <div className={styles.iconRow}>
        <SquareIcon
          className={className}
          title="SquareIcon"
          iconPath={IconStack}
          iconAlt="Bauhaus34"
          text="FULLSTACK"
          onClick={() => handleNavigation('/works/5')}
        />
      </div>

      <div className={styles.iconRow}>
        <SquareIcon
          className={className}
          title="SquareIcon"
          iconPath={IconAuto}
          iconAlt="Brutalism21"
          text="BOT & AUTOMATION"
          onClick={() => handleNavigation('/works/2')}
        />
      </div>

      <div className={styles.iconRow}>
        <SquareIcon
          className={className}
          title="SquareIcon"
          iconPath={IconSoftware}
          iconAlt="Brutalism65"
          text="SOFTWARE & ALGORITHM"
          onClick={() => handleNavigation('/works/1')}
        />
      </div>
    </div>
  );
};

export default Icons;
