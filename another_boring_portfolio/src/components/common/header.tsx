import { Link } from 'react-router-dom'
import styles from './header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        <nav className={styles.nav}>
          <Link to="/resume" className={styles.navLink}>
            Resume
          </Link>
          <Link to="/works" className={styles.navLink}>
            Works
          </Link>
          <Link to="/" className={styles.navHome}>
            Home
          </Link>
        </nav>

      </div>
    </header>
  )
}