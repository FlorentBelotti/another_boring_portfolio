import { useEffect, useState } from 'react';

import styles from './works.module.scss'
import EmblaCarouselWorks from '../fragments/works/bloc-1/emblaCarouselWorks';
import { WORKS_LIST } from '../../constants/works';
import SeparatorText from '../fragments/common/separatorText';
import TechLogos from '../fragments/works/bloc-2/techLogos';

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
      {/* Description */}
      <SeparatorText title='Description'></SeparatorText>
      {SLIDES[currentSlideIndex] && (
        <div className={styles.description}>
          <p>{SLIDES[currentSlideIndex].description}</p>
        </div>
      )}



      {/* Technologies */}
      <SeparatorText title='Technologies'></SeparatorText>
      <>
        <TechLogos technologies={SLIDES[currentSlideIndex].technologies} />
      </>

      {/* Features */}
      <SeparatorText title='Fonctionnalités'></SeparatorText>
      <>
        <ul>
          {SLIDES[currentSlideIndex].features.map((f: string, i: number) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </>

      {/* Year */}
      <SeparatorText title='Année'></SeparatorText>
      <>
        <p>{SLIDES[currentSlideIndex].year}</p>
      </>

      {/* Project type */}
      <SeparatorText title='Type de projet'></SeparatorText>
      <>
        <p>{SLIDES[currentSlideIndex].projectType}</p>
      </>

      {/* Links */}
      <SeparatorText title='Lien code source'></SeparatorText>
      <>
        <p>{SLIDES[currentSlideIndex].sourceLink || '—'}</p>
      </>

      <SeparatorText title='Demo'></SeparatorText>
      <>
        <p>{SLIDES[currentSlideIndex].demoLink || '—'}</p>
      </>
    </div>
  )

  const rightBlock = (
    <div className={styles.block}> 
    </div>
  )

  return { leftBlock, centerBlock, rightBlock }
}
