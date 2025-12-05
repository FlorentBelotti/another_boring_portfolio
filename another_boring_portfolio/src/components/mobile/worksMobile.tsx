import { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './worksMobile.module.scss'
import EmblaCarouselWorks from '../fragments/works/bloc-1/emblaCarouselWorks';
import EmblaScreenshot from '../fragments/works/bloc-3/emblaScreenshot';
import WorkDetails from '../fragments/works/bloc-1/workDetails';
import WorkObservations from '../fragments/works/bloc-1/workObservations';
import { WORKS_LIST } from '../../constants/works';
import TechLogos from '../fragments/works/bloc-2/techLogos';
import ProjectMeta from '../fragments/works/bloc-2/projectMeta';
import ProjectAccordion from '../fragments/works/bloc-2/projectAccordion';

const SLIDES = WORKS_LIST

export default function WorksMobile() {

  const [isFirefox, setIsFirefox] = useState(false)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState<string | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const screenshots = SLIDES[currentSlideIndex].screenshots || [];

  useEffect(() => {
    const ua = typeof navigator !== 'undefined' ? navigator.userAgent : ''
    setIsFirefox(/firefox/i.test(ua))
  }, [])

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => setSelectedIndex(emblaApi.selectedScrollSnap()));
    }
  }, [emblaApi, currentSlideIndex]);

  const handleSlideChange = (index: number) => {
    setCurrentSlideIndex(index)
  }

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const handleImageClick = (src: string) => {
    setModalImageSrc(src);
    setIsImageModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsImageModalOpen(false);
    setModalImageSrc(null);
  };

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

  return { leftBlock }
}
