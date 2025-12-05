import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaOptionsType, EmblaEventType, EmblaCarouselType } from 'embla-carousel'
import styles from './emblaCarouselWorks.module.scss'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './emblaCarouselArrowWorks'
import {
  DotButton,
  useDotButton
} from './emblaCarouselButtonWorks'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTransitionStore } from '../../../../stores/transitionStore'

const TWEEN_FACTOR_BASE = 0.52

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

type PropType = {
  slides: any[]
  options?: EmblaOptionsType
  autoplayDelay?: number
  onSlideChange?: (index: number) => void
}

const EmblaCarouselWorks: React.FC<PropType> = ({ 
  slides, 
  options,
  onSlideChange 
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])
  const location = useLocation()
  const navigate = useNavigate()
  const { startTransition: _startTransition, endTransition: _endTransition } = useTransitionStore()

  // Récupère l'index depuis l'URL
  const match = location.pathname.match(/^\/works\/(\d+)$/)
  const urlIndex = match ? parseInt(match[1], 10) : undefined

  // Positionne le carrousel sur le slide correspondant à l'index de l'URL
  useEffect(() => {
    if (emblaApi && typeof urlIndex === 'number' && urlIndex >= 0 && urlIndex < slides.length) {
      emblaApi.scrollTo(urlIndex)
    }
  }, [emblaApi, urlIndex, slides.length])

  // Met à jour l'URL lors du changement de slide si l'index n'est pas présent ou incorrect
  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        const selected = emblaApi.selectedScrollSnap()
        if (typeof urlIndex !== 'number' || urlIndex !== selected) {
          // Suppression de l'animation de transition ici
          navigate(`/works/${selected}`, { replace: true })
        }
        if (onSlideChange) onSlideChange(selected)
      })
    }
  }, [emblaApi, urlIndex, navigate, onSlideChange])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(`.${styles.slideNumber}`) as HTMLElement
    })
  }, [styles.slideNumber])

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach((slideIndex: number) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem: any) => {
              const target = loopItem.target()
              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)
                if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
                if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
              }
            })
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
          const scale = numberWithinRange(tweenValue, 0, 1).toString()
          const tweenNode = tweenNodes.current[slideIndex]
          if (tweenNode) tweenNode.style.transform = `scale(${scale})`
        })
      })
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) return
    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenScale(emblaApi)
    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale)
  }, [emblaApi, tweenScale, setTweenNodes, setTweenFactor])

  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(selectedIndex)
    }
  }, [selectedIndex, onSlideChange])

  return (
    <div className={styles.embla}>
      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {slides.map((slide, index) => (
            <div className={styles.emblaSlide} key={slide.id || index}>
              <div className={styles.slideNumber}>{slide.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.emblaControls}>
        <div className={styles.emblaButtons}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <div className={styles.emblaDots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`${styles.emblaDot}${index === selectedIndex ? ' ' + styles.emblaDotSelected : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarouselWorks