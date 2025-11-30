import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './emblaCarouselButton'
import styles from './emblaCarousel.module.scss'
import { WORKS_LIST } from '../../../../constants/works' // Ajout import
import { useNavigate } from 'react-router-dom'
import { useTransitionStore } from '../../../../stores/transitionStore'

type PropType = {
  slides: string[]
  options?: Parameters<typeof useEmblaCarousel>[0]
  autoplayDelay?: number
  descriptions?: string[]
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, autoplayDelay = 3000, descriptions } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
    align: 'center'
  })
  const [emblaDescRef, emblaDescApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
  })
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate()
  const { startTransition, endTransition } = useTransitionStore()

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    const selected = emblaMainApi.selectedScrollSnap()
    setSelectedIndex(selected)
    emblaThumbsApi.scrollTo(selected)
    if (emblaDescApi) {
      emblaDescApi.scrollTo(selected)
    }
  }, [emblaMainApi, emblaThumbsApi, emblaDescApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi || isHovered) return
    onSelect()

    emblaMainApi.on('select', onSelect).on('reInit', onSelect)
  }, [emblaMainApi, onSelect, isHovered])

  useEffect(() => {
    if (!emblaMainApi || isHovered) return

    const autoplay = setInterval(() => {
      if (emblaMainApi.canScrollNext()) {
        emblaMainApi.scrollNext()
      } else {
        emblaMainApi.scrollTo(0)
      }
    }, autoplayDelay)

    return () => clearInterval(autoplay)
  }, [emblaMainApi, autoplayDelay, isHovered])

  // Utilise WORKS_LIST pour récupérer screenshots et titre
  const getSlideContent = (index: number) => {
    const project = WORKS_LIST[index]
    if (project && project.screenshots && project.screenshots.length > 0) {
      return (
        <>
          <img
            src={project.screenshots[0]}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '0.5rem'
            }}
          />
          <div className={styles.emblaOverlay}>CLICK HERE TO SEE MY PROJECT PAGE</div>
        </>
      )
    }
    return (
      <div className={styles.embla__slide__number}>{project ? project.title : slides[index]}</div>
    )
  }

  // Ajoute la navigation vers la page projet au clic sur le container avec animation de transition
  const handleContainerClick = useCallback(() => {
    startTransition()
    setTimeout(() => {
      navigate(`/works/${selectedIndex}`)
    }, 500)
    setTimeout(() => {
      endTransition()
    }, 1200)
  }, [navigate, selectedIndex, startTransition, endTransition])

  return (
    <div className={styles.embla}>
      <div className={styles.display}>
        <div className={styles.works_container}>
          <div className={styles.title}> WORKS </div>
          <div className={styles.square}></div>
        </div>
        <div
          className={styles.embla__viewport}
          ref={emblaMainRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleContainerClick}
          style={{ cursor: isHovered ? 'pointer' : 'default' }}
        >
          <div className={styles.embla__container}>
            {slides.map((_, index) => (
              <div className={styles.embla__slide} key={index}>
                {getSlideContent(index)}
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className={styles['embla-thumbs']}>
        <div className={styles['embla-thumbs__viewport']} ref={emblaThumbsRef}>

          <div className={styles['embla-thumbs__container']}>
            {slides.map((slide, index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                label={slide}
              />
            ))}
          </div>

        </div>
      </div>

      {/* {descriptions && (
        <div className={styles['embla-description']}>
          <div className={styles['embla-description__viewport']} ref={emblaDescRef}>
            <div className={styles['embla-description__container']}>
              {descriptions.map((desc, index) => (
                <div className={styles['embla-description__slide']} key={index}>
                  <p className={styles['embla-description__text']}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )} */}
    </div>
  )
}

export default EmblaCarousel