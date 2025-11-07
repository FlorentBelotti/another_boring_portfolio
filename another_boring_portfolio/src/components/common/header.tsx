import { Link } from 'react-router-dom'
import styles from './header.module.scss'

type Page = 'home' | 'resume' | 'works'

interface HeaderProps {
  currentPage: Page
  onPageChange: (page: Page) => void
}

export default function Header({ currentPage, onPageChange }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <button 
            onClick={() => onPageChange('resume')}
            className={styles.navLink}
            type="button"
          >
            Resume
          </button>
          <button 
            onClick={() => onPageChange('works')}
            className={styles.navLink}
            type="button"
          >
            Works
          </button>
          <button 
            onClick={() => onPageChange('home')}
            className={currentPage === 'home' ? styles.navHome : styles.navLink}
            type="button"
          >
            Home
          </button>
        </nav>
      </div>
    </header>
  )
}