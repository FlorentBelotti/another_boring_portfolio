import { ReactNode, useRef, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useTransitionStore } from '../../stores/transitionStore'
import styles from './pageTransition.module.scss'

interface PageTransitionProps {
  children: ReactNode
  /** Index du bloc pour le délai en cascade (0, 1, 2...) */
  index?: number
  /** Délai de base entre chaque bloc en secondes */
  staggerDelay?: number
  /** Durée de l'animation du volet en secondes */
  duration?: number
  /** Active ou désactive la transition pour ce bloc */
  enableTransition?: boolean
  /** Classe CSS additionnelle pour le wrapper */
  className?: string
}

// Compteur global pour générer des IDs uniques
let instanceCounter = 0

export default function PageTransition({
  children,
  index = 0,
  staggerDelay = 0.1,
  duration = 1.0,
  enableTransition = true,
  className = '',
}: PageTransitionProps) {
  const isTransitioning = useTransitionStore((state) => state.isTransitioning)
  const targetRoute = useTransitionStore((state) => state.targetRoute)
  const location = useLocation()
  
  // ID unique pour cette instance du composant
  const instanceId = useMemo(() => {
    instanceCounter++
    return instanceCounter
  }, [])

  // Route au moment du montage
  const mountedRoute = useRef(location.pathname)

  // Calcul du délai basé sur l'index du bloc
  const delay = index * staggerDelay

  // N'affiche l'overlay QUE si :
  // 1. On est en transition
  // 2. On est sur la route qui se démonte (pas celle qui arrive)
  // 3. La route cible est différente de notre route
  const shouldShowOverlay = isTransitioning && 
                           mountedRoute.current === location.pathname && 
                           targetRoute !== location.pathname

  return (
    <div className={`${styles.pageTransition} ${className}`}>
      {/* Contenu de la page */}
      <div className={styles.content}>
        {children}
      </div>

      {/* Volet de transition */}
      {enableTransition && (
        <AnimatePresence mode="wait">
          {shouldShowOverlay && (
            <motion.div
              key={`overlay-${instanceId}`}
              className={styles.overlay}
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              exit={{ x: '100%' }}
              transition={{
                duration: duration,
                delay: delay,
                ease: [0.65, 0, 0.35, 1],
              }}
            />
          )}
        </AnimatePresence>
      )}
    </div>
  )
}