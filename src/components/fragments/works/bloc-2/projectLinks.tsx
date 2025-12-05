import React from 'react';
import styles from './projectLinks.module.scss';
import SquareIcon from '../../common/squareIcon';
import { LinkExternalIcon } from '@primer/octicons-react';

interface ProjectLinksProps {
  githubLink?: string;
  demoLink?: string;
  className?: string;
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({
  githubLink,
  demoLink,
  className,
}) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
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

export default ProjectLinks;
