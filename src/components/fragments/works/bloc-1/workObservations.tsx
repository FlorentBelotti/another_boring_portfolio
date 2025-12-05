import React from 'react';
import styles from './workObservations.module.scss';
import SeparatorText from '../../common/separatorText';

interface WorkObservationProps {
  observation: string;
  className?: string;
}

const WorkObservation: React.FC<WorkObservationProps> = ({ observation, className }) => {
  return (
    <div className={`${styles.introduction} ${className || ''}`}>
      <SeparatorText title="OBSERVATION" />
      <p className={styles.text}>
        {observation}
      </p>
    </div>
  );
};

export default WorkObservation;
