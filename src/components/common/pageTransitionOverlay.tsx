import { type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTransitionStore } from '../../stores/transitionStore'
import styles from './pageTransitionOverlay.module.scss'

interface PageTransitionOverlayProps {
  children: ReactNode
}

export default function PageTransitionOverlay({ children}: PageTransitionOverlayProps) {
  const isTransitioning = useTransitionStore((state) => state.isTransitioning)

  return (
    <div className={styles.blockWrapper}>
      
      {children}

      <AnimatePresence>
        {isTransitioning && (
          <motion.div className={styles.overlay}
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            exit={{ x: '100%' }}
            transition={{
              duration: 1.0,
              ease: [0.65, 0, 0.35, 1],
            }} />
        )}
      </AnimatePresence>

    </div>
  )
}