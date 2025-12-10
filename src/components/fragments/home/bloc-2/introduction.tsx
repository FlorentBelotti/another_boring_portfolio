import React from 'react';
import styles from './introduction.module.scss';
import SeparatorText from '../../common/separatorText';
import Separator from '../../common/separator';

interface IntroductionProps {
  text: string;
  className?: string;
}

const Introduction: React.FC<IntroductionProps> = ({ text, className }) => {
  return (
    <div className={`${styles.introduction} ${className || ''}`}>
      <SeparatorText title="AVANT-PROPOS" />
      
      <p className={styles.text}>
        {text.split(/(<strong>.*?<\/strong>)/g).map((part, index) => {
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

      <Separator />
    </div>
  );
};

export default Introduction;
