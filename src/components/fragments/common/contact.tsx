import React from 'react';
import styles from './contact.module.scss';
import SeparatorText from './separatorText';
import Separator from './separator';

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className }) => {
  return (
    <div className={`${styles.contact} ${className || ''}`}>
      <SeparatorText title="CONTACT" />
      
      <div className={styles.socialContainer}>
        <a 
          href="mailto:florent.l.d.belotti@gmail.com" 
          className={`${styles.socialIcon} ${styles.mail}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope"></i>
        </a>
        <a 
          href="https://www.linkedin.com/in/florent-b-8ab0a8304/" 
          className={`${styles.socialIcon} ${styles.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a 
          href="https://github.com/FlorentBelotti" 
          className={`${styles.socialIcon} ${styles.github}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>

      <Separator />
    </div>
  );
};

export default Contact;
