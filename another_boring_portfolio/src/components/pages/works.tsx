import { useEffect, useState } from 'react';

import styles from './works.module.scss'
import EmblaCarouselWorks from '../fragments/works/bloc-1/emblaCarouselWorks';
import { WORKS_LIST } from '../../constants/works';
import SeparatorText from '../fragments/common/separatorText';
import TechLogos from '../fragments/works/bloc-2/techLogos';
import ProjectMeta from '../fragments/works/bloc-2/projectMeta';

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
      
        <ProjectMeta tag={SLIDES[currentSlideIndex].tag} type={SLIDES[currentSlideIndex].type } githubLink={SLIDES[currentSlideIndex].sourceLink} demoLink={SLIDES[currentSlideIndex].demoLink} />
        
      <div className={styles.innerContent}>
        <div className={styles.sectionTitle}>Description</div>
        {SLIDES[currentSlideIndex] && (
          <div className={styles.description}>
            <p>{SLIDES[currentSlideIndex].description}</p>
          </div>
        )}
      </div>
      
      <div className={styles.innerContent}>
        <div className={styles.sectionTitle}>Features</div>
        {SLIDES[currentSlideIndex] && (
          <div className={styles.description}>
            <p>{SLIDES[currentSlideIndex].description}</p>
          </div>
        )}
      </div>

      <div className={styles.innerContent}>
        <div className={styles.sectionTitle}>Technos</div>
        <TechLogos technologies={SLIDES[currentSlideIndex].technologies} />
      </div>

    </div>
  )
  
  const rightBlock = (
    <div className={`${styles.block} ${styles.right}`}>
    </div>
  )

  return { leftBlock, centerBlock, rightBlock }
}
