import { useEffect, useState } from 'react';

import styles from './works.module.scss'
import EmblaCarouselWorks from '../fragments/works/bloc-1/emblaCarouselWorks';
import { WORKS_LIST } from '../../constants/works';

const SLIDES = WORKS_LIST

export default function Works() {

  const [isFirefox, setIsFirefox] = useState(false)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  useEffect(() => {
    const ua = typeof navigator !== 'undefined' ? navigator.userAgent : ''
    setIsFirefox(/firefox/i.test(ua))
  }, [])

  const handleSlideChange = (index: number) => {
    setCurrentSlideIndex(index)
  }

  const leftBlock = (
    <div className={styles.block}>
      <EmblaCarouselWorks
        slides={SLIDES}
        options={{ loop: true }}
        autoplayDelay={4000}
        onSlideChange={handleSlideChange}
      />
    </div>
  )

  const centerBlock = (
    <div className={`${styles.block} ${styles.center}`}>
      {SLIDES[currentSlideIndex] && (
        <>
          <h2>{SLIDES[currentSlideIndex].title}</h2>
          <p>{SLIDES[currentSlideIndex].description}</p>
          {/* Ajoutez ici tout autre contenu de SLIDES[currentSlideIndex] */}
        </>
      )}
    </div>
  )

  const rightBlock = (
    <div className={styles.block}> 
    </div>
  )

  return { leftBlock, centerBlock, rightBlock }
}