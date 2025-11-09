import type { HeaderProps } from '../../interfaces/header'
import styles from './header.module.scss'

export default function Header({ onPageChange }: HeaderProps) {
  return (
    <header className={styles.header}>
      
      <div className={styles.container}>

        <nav className={styles.nav}>

          <button className={styles.navLink}
            onClick={() => onPageChange('resume')}
            type="button">
            Resume
          </button>

          <button className={styles.navLink}
            onClick={() => onPageChange('works')}
            type="button" >
            Works
          </button>

          <button className={styles.navHome }
            onClick={() => onPageChange('home')}
            type="button">
            Home
          </button>

        </nav>
      </div>
    </header>
  )
}