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
        {textContent}
      </p>

    </div>
  );
};

export default AboutMe;
