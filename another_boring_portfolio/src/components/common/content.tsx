import { ReactNode } from 'react'
import styles from './Content.module.scss'
import PageTransitionOverlay from './pageTransitionOverlay'

interface ContentProps {
  leftBlock: ReactNode
  centerBlock: ReactNode
  rightBlock: ReactNode
}

export default function Content({ leftBlock, centerBlock, rightBlock }: ContentProps) {
  return (
    <main className={styles.content}>
      <div className={styles.leftBlock}>
        <PageTransitionOverlay>
          {leftBlock}
        </PageTransitionOverlay>
      </div>
      <div className={styles.centerBlock}>
        <PageTransitionOverlay>
          {centerBlock}
        </PageTransitionOverlay>
      </div>
      <div className={styles.rightBlock}>
        <PageTransitionOverlay>
          {rightBlock}
        </PageTransitionOverlay>
      </div>
    </main>
  )
}