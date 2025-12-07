import styles from './notFound.module.scss'
import { Link } from 'react-router-dom'

export default function NotFound() {
  const leftBlock = (
    <div className={styles.container}>
    </div>
  )

  const centerBlock = (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>Page not found</p>
      <Link to="/" className={styles.link}>Go back home</Link>
    </div>
  )

  const rightBlock = (
    <div className={styles.container}>
    </div>
  )

  return { leftBlock, centerBlock, rightBlock }
}
