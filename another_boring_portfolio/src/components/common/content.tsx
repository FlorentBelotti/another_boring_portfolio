import { ReactNode } from 'react'
import styles from './Content.module.scss'

interface ContentProps {
  children: ReactNode
}

export default function Content({ children }: ContentProps) {
  return (
    <main className={styles.content}>
      <div className={styles.grid}>
        {children}
      </div>
    </main>
  )
}