import React from 'react';
import styles from './aboutMe.module.scss';
import SeparatorText from '../../common/separatorText';
// import Separator from '../../common/separator';

interface AboutMeProps {
  text: string;
  className?: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ text, className }) => {
  return (
    <div className={`${styles.introduction} ${className || ''}`}>
      <SeparatorText title="ABOUT ME" />
      
      <p className={styles.text}>
        {text}
      </p>

    </div>
  );
};

export default AboutMe;
