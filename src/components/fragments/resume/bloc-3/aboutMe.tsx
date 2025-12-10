import React from 'react';
import styles from './aboutMe.module.scss';
import SeparatorText from '../../common/separatorText';

interface AboutMeProps {
  text: string | string[];
  className?: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ text, className }) => {
  const textContent = Array.isArray(text) ? text.join(' ') : text;
  
  return (
    <div className={`${styles.introduction} ${className || ''}`}>
      <SeparatorText title="ABOUT ME" />
      
      <p className={styles.text}>
        {textContent.split(/(<strong>.*?<\/strong>)/g).map((part, index) => {
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

export default AboutMe;
