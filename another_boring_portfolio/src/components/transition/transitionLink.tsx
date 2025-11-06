import { ReactNode, MouseEvent, AnchorHTMLAttributes } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTransitionStore } from '../../stores/transitionStore'
import { calculateTransitionTiming } from '../../config/transition'

interface TransitionLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: string
  children: ReactNode
}

export default function TransitionLink({
  to,
  children,
  onClick,
  ...props
}: TransitionLinkProps) {
  const navigate = useNavigate()
  const { startTransition, endTransition } = useTransitionStore()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    if (onClick) {
      onClick(e)
    }

    console.log('🎯 Link clicked:', to)
    startTransition(to)

    const { timeToCover, totalDuration } = calculateTransitionTiming()

    setTimeout(() => {
      console.log('📍 Navigating to:', to)
      navigate(to)
      
      setTimeout(() => {
        console.log('✅ Transition ended')
        endTransition()
      }, totalDuration - timeToCover)
    }, timeToCover)
  }

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}