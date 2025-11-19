import styles from './nextPage.module.scss'
import { motion } from 'framer-motion'

interface NextPageProps {
  className?: string
}

export default function NextPage({ className }: NextPageProps) {

  return (
    <div className={`${styles.container} ${className || ''}`}>
      <motion.div
        className={styles.overlay}
        aria-hidden="true"
        initial={{ x: '-100%' }}
        animate={{ x: ['-100%', '0%', '100%'] }}
        transition={{
          duration: 1.4,
          times: [0, 0.5, 1],
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: 1.0,
        }}
      />

      <div className={styles.textContainer}>
        <p className={styles.text1}>
          WOULD<br/>YOU LIKE TO
        </p>
        <p className={styles.text2}>
          KNOW<br/>MORE?
        </p>
      </div>
    </div>
  )
}
