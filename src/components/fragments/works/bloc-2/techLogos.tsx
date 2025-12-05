import React, { useEffect } from 'react';
import styles from './techLogos.module.scss';
import SeparatorText from '../../common/separatorText';

interface TechLogosProps {
  technologies: string[];
  className?: string;
}

const ICON_MAP: Record<string, string> = {
  c: "devicon-c-plain colored",
  "c++": "devicon-cplusplus-plain colored",
  python: "devicon-python-plain colored",
  typescript: "devicon-typescript-plain colored",
  javascript: "devicon-javascript-plain colored",
  react: "devicon-react-original colored",
  nextjs: "devicon-nextjs-plain",
  node: "devicon-nodejs-plain colored",
  nestjs: "devicon-nestjs-plain colored",
  postgres: "devicon-postgresql-plain colored",
  mongodb: "devicon-mongodb-plain colored",
  docker: "devicon-docker-plain colored",
  angular: "devicon-angularjs-plain colored",
  html: "devicon-html5-plain colored",
  css: "devicon-css3-plain colored",
  sass: "devicon-sass-original colored",
  d3: "devicon-d3js-plain colored",
};

const TechLogos: React.FC<TechLogosProps> = ({ technologies, className }) => {
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
    <div className={`${styles.container} ${className || ''}`}>
      <SeparatorText title="TECHNOS" />
      <div className={styles.icons}>
        {technologies.map((tech, i) => {
          const key = tech.toLowerCase();
          const iconClass = ICON_MAP[key];

          if (!iconClass) return null;

          return (
            <i
              key={i}
              className={`${styles.icon} ${iconClass}`}
              aria-hidden="true"
              title={tech}
            ></i>
          );
        })}
      </div>
    </div>
  );
};

export default TechLogos;
