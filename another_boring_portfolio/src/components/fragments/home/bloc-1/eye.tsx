import { useEffect, useRef, useState } from 'react'
import styles from './eye.module.scss'

export default function Eye() {
  const eyeRef = useRef<HTMLDivElement>(null)
  const [pupilPosition, setPupilPosition] = useState({ x: 0, y: 0 })
  const [isSleeping, setIsSleeping] = useState(false)
  const [isBlinking, setIsBlinking] = useState(false)
  const [isShaking, setIsShaking] = useState(false)
  const sleepTimerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!eyeRef.current) return

    //   SLEEPING ROUTINE
      if (isSleeping) {
        setIsBlinking(true)
        setIsShaking(true)
        setTimeout(() => {
          setIsBlinking(false)
        }, 300)
        setTimeout(() => {
          setIsShaking(false)
        }, 600)
      }
      setIsSleeping(false)

    //   SLEEPING TIMER
      if (sleepTimerRef.current) {
        clearTimeout(sleepTimerRef.current)
      }
      sleepTimerRef.current = setTimeout(() => {
        setIsSleeping(true)
      }, 3000)

      const eyeRect = eyeRef.current.getBoundingClientRect()
      const eyeCenterX = eyeRect.left + eyeRect.width / 2
      const eyeCenterY = eyeRect.top + eyeRect.height / 2

    //   Mouse & Screen centering
      const deltaX = e.clientX - eyeCenterX
      const deltaY = e.clientY - eyeCenterY
      const angle = Math.atan2(deltaY, deltaX)
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

    //   Pupil movement radius
      const maxDistance = Math.min(eyeRect.width, eyeRect.height) * 0.2
      const pupilDistance = Math.min(distance * 0.3, maxDistance)

    //   Pupil position
      const pupilX = Math.cos(angle) * pupilDistance
      const pupilY = Math.sin(angle) * pupilDistance

      setPupilPosition({ x: pupilX, y: pupilY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (sleepTimerRef.current) {
        clearTimeout(sleepTimerRef.current)
      }
    }
  }, [isSleeping])

  const getEyelidHeight = () => {
    if (isBlinking) return '105%'
    if (isSleeping) return '95%'
    return '40%'
  }

  return (
    <div className={styles.eye_container}>
      <div 
        ref={eyeRef}
        className={`${styles.eyeball} ${isSleeping ? styles.sleeping : ''} ${isBlinking ? styles.blinking : ''} ${isShaking ? styles.shaking : ''}`}
        style={{
          // @ts-ignore
          '--eyelid-height': getEyelidHeight(),
          '--pupil-x': `${pupilPosition.x}px`,
          '--pupil-y': `${pupilPosition.y}px`,
        }}
      />
    </div>
  )
}
