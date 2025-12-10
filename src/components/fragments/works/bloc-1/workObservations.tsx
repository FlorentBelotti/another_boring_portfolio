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
        {observation.split(/(<strong>.*?<\/strong>)/g).map((part, index) => {
          if (part.startsWith('<strong>') && part.endsWith('</strong>')) {
            return (
              <span key={index} className={styles.highlight}>
                {part.replace(/<\/?strong>/g, '')}
              </span>
            );
          }
          return part;
        })}
      </p>
    </div>
  );
};

export default WorkObservation;
