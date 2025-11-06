import TransitionLink from '../transition/transitionLink'
import styles from './header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        <nav className={styles.nav}>
          <TransitionLink to="/resume" className={styles.navLink}>
            Resume
          </TransitionLink>
          <TransitionLink to="/works" className={styles.navLink}>
            Works
          </TransitionLink>
          <TransitionLink to="/" className={styles.navHome}>
            Home
          </TransitionLink>
        </nav>

      </div>
    </header>
  )
}