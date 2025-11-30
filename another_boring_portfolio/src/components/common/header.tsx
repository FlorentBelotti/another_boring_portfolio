import type { HeaderProps } from '../../interfaces/header'
import styles from './header.module.scss'

export default function Header({ currentPage, onPageChange }: HeaderProps & { currentPage: string }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <button
            className={
              `${styles.fontHeading} ${currentPage === 'resume' ? styles.neonGlow : styles.neonUnderline}`
            }
            onClick={currentPage === 'resume' ? undefined : () => onPageChange('resume')}
            type="button"
            disabled={currentPage === 'resume'}
            style={currentPage === 'resume'
              ? { cursor: 'default', color: 'var(--color-accent)' }
              : {}
            }
          >
            Resume
          </button>

          <button
            className={
              `${styles.fontHeading} ${currentPage === 'works' ? styles.neonGlow : styles.neonUnderline}`
            }
            onClick={currentPage === 'works' ? undefined : () => onPageChange('works')}
            type="button"
            disabled={currentPage === 'works'}
            style={currentPage === 'works'
              ? { cursor: 'default', color: 'var(--color-accent)' }
              : {}
            }
          >
            Works
          </button>

          <button
            className={
              `${styles.fontHeading} ${currentPage === 'home' ? styles.neonGlow : styles.neonUnderline}`
            }
            onClick={currentPage === 'home' ? undefined : () => onPageChange('home')}
            type="button"
            disabled={currentPage === 'home'}
            style={currentPage === 'home'
              ? { cursor: 'default', color: 'var(--color-accent)' }
              : {}
            }
          >
            Home
          </button>
        </nav>
      </div>
    </header>
  )
}