import React from 'react';
import styles from './projectMeta.module.scss';
import SquareIcon from '../../common/squareIcon';
import { LinkExternalIcon } from '@primer/octicons-react';


interface ProjectMetaProps {
  tag: string;
  type: string;
  githubLink?: string;
  demoLink?: string;
  className?: string;
}

function getLabelClass(value: string) {
  switch (value.toLowerCase()) {
    case 'web application':
      return styles['label--web'];
    case '42':
      return styles['label--42'];
    case 'pro':
      return styles['label--pro'];
    case 'business application':
      return styles['label--business'];
    case 'marketplace':
      return styles['label--marketplace'];
    case 'side':
      return styles['label--side'];
    case 'bot':
      return styles['label--bot'];
    case 'software':
      return styles['label--software'];
    default:
      return styles.label;
  }
}

const ProjectMeta: React.FC<ProjectMetaProps> = ({ tag, type, githubLink, demoLink, className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <div className={styles.value}>
        <span className={`${styles.label} ${getLabelClass(type)}`}>{type}</span>
      </div>
      <div className={styles.value}>
        <span className={`${styles.label} ${getLabelClass(tag)}`}>{tag}</span>
      </div>
      <a
        href={githubLink || undefined}
        target="_blank"
        rel="noopener noreferrer"
        className={!githubLink ? styles.disabled : ''}
        tabIndex={!githubLink ? -1 : undefined}
        aria-disabled={!githubLink}
        onClick={e => { if (!githubLink) e.preventDefault(); }}
      >
        <SquareIcon
          deviconClass="devicon-github-original"
          title="See source code"
        />
      </a>
      <a
        href={demoLink || undefined}
        target="_blank"
        rel="noopener noreferrer"
        className={!demoLink ? styles.disabled : ''}
        tabIndex={!demoLink ? -1 : undefined}
        aria-disabled={!demoLink}
        onClick={e => { if (!demoLink) e.preventDefault(); }}
      >
        <SquareIcon
          customIcon={<LinkExternalIcon size={24} />}
          title="See site"
        />
      </a>
    </div>
  );
};

export default ProjectMeta;
