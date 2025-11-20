import React, { useEffect } from 'react';
import styles from './summary.module.scss';
import SeparatorText from '../../common/separatorText';

interface SummaryProps {
  className?: string;
}

const Summary: React.FC<SummaryProps> = ({ className }) => {
  useEffect(() => {
    const id = 'devicon-css';
    if (!document.getElementById(id)) {
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className={`${styles.introduction} ${className || ''}`}>
      <SeparatorText title="TECHNOS" />

      <div className={styles.container}>
        <div className={styles['tech-list']}>
          <div className={styles['tech-row']}>
            <div className={styles['tech-label']}>LANGUAGES</div>
            <div className={styles.icons} aria-label="languages">
              <i className={`${styles.icon} devicon-c-plain colored`} aria-hidden="true"></i>
              <i className={`${styles.icon} devicon-cplusplus-plain colored`} aria-hidden="true"></i>
              <i className={`${styles.icon} devicon-python-plain colored`} aria-hidden="true"></i>
              <i className={`${styles.icon} devicon-typescript-plain colored`} aria-hidden="true"></i>
            </div>
          </div>

          <div className={styles['tech-row']}>
            <div className={styles['tech-label']}>FRONTEND</div>
            <div className={styles.icons} aria-label="frontend">
              <i className={`${styles.icon} devicon-angularjs-plain colored`} aria-hidden="true"></i>
              <i className={`${styles.icon} devicon-react-original colored`} aria-hidden="true"></i>
            </div>
          </div>

          <div className={styles['tech-row']}>
            <div className={styles['tech-label']}>BACKEND</div>
            <div className={styles.icons} aria-label="backend">
              <i className={`${styles.icon} devicon-django-plain colored`} aria-hidden="true"></i>
            </div>
          </div>

          <div className={styles['tech-row']}>
            <div className={styles['tech-label']}>STYLES</div>
            <div className={styles.icons} aria-label="styles">
              <i className={`${styles.icon} devicon-html5-plain colored`} aria-hidden="true"></i>
              <i className={`${styles.icon} devicon-sass-original colored`} aria-hidden="true"></i>
              <i className={`${styles.icon} devicon-css3-plain colored`} aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
