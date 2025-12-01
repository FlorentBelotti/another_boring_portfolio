import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTransitionStore } from '../../../../stores/transitionStore';
import SeparatorIcon from '../../common/separatorIcon';
import IconBrutalism from '../../../../assets/icons/Brutalism 27.svg';
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
        iconAlt="Sun icon"
      />

      <div className={styles.iconRow}>
        <SquareIcon
          className={className}
          title="SquareIcon"
          iconPath={IconBrutalism}
          iconAlt="Brutalism27"
          text="Ceci est un test"
          onClick={() => handleNavigation('/resume')}
        />
      </div>

      <div className={styles.iconRow}>
        <SquareIcon
          className={className}
          title="SquareIcon"
          iconPath={IconBrutalism}
          iconAlt="Brutalism27"
          text="Ceci est un second test"
          onClick={() => handleNavigation('/resume')}
        />
      </div>

      <div className={styles.iconRow}>
        <SquareIcon
          className={className}
          title="SquareIcon"
          iconPath={IconBrutalism}
          iconAlt="Brutalism27"
          text="Ceci est un troisième test"
          onClick={() => handleNavigation('/resume')}
        />
      </div>
    </div>
  );
};

export default Icons;
