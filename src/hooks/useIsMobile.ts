import { useState, useEffect } from 'react'

export function useIsMobile(breakpoint: number = 768) {
  const [isMobile, setIsMobile] = useState(() => {
    // Initialiser avec la valeur correcte dès le départ
    if (typeof window !== 'undefined') {
      return window.innerWidth <= breakpoint
    }
    return false
  })

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= breakpoint)
    }

    // Vérifier immédiatement au montage
    checkIsMobile()
    
    window.addEventListener('resize', checkIsMobile)

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [breakpoint])

  return isMobile
}
