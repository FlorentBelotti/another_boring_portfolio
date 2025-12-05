import { useEffect, useState } from 'react';
import styles from './worksMobile.module.scss'
import EmblaCarouselWorks from '../fragments/works/bloc-1/emblaCarouselWorks';
import WorkDetails from '../fragments/works/bloc-1/workDetails';
import WorkObservations from '../fragments/works/bloc-1/workObservations';
import { WORKS_LIST } from '../../constants/works';
import TechLogos from '../fragments/works/bloc-2/techLogos';
import ProjectMeta from '../fragments/works/bloc-2/projectMeta';

const SLIDES = WORKS_LIST

export default function WorksMobile() {

  const [_isFirefox, setIsFirefox] = useState(false)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  useEffect(() => {
    const ua = typeof navigator !== 'undefined' ? navigator.userAgent : ''
    setIsFirefox(/firefox/i.test(ua))
  }, [])

  const handleSlideChange = (index: number) => {
    setCurrentSlideIndex(index)
  }

  const leftBlock = (
    <div className={`${styles.block} ${styles.left}`}>
      <EmblaCarouselWorks
        slides={SLIDES}
        options={{ loop: true }}
        autoplayDelay={4000}
        onSlideChange={handleSlideChange}
      />
      <ProjectMeta
        tag={SLIDES[currentSlideIndex].tag}
        type={SLIDES[currentSlideIndex].type}
        githubLink={SLIDES[currentSlideIndex].sourceLink}
        demoLink={SLIDES[currentSlideIndex].demoLink} />
      <WorkDetails
        year={SLIDES[currentSlideIndex].year}
        company={SLIDES[currentSlideIndex].company}
        title={SLIDES[currentSlideIndex].title}
        role={SLIDES[currentSlideIndex].role}
        projectType={SLIDES[currentSlideIndex].projectType} />
      <WorkObservations observation={SLIDES[currentSlideIndex].observation} />
      <TechLogos technologies={SLIDES[currentSlideIndex].technologies} />
    </div>
  )

  const centerBlock = (
    <div className={`${styles.block} ${styles.center}`}></div>
  )

  const rightBlock = (
    <div className={`${styles.block} ${styles.right}`}></div>
  )

  return { leftBlock, centerBlock, rightBlock }
}
