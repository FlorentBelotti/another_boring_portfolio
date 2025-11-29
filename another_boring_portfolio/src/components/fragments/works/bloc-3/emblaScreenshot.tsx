import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './emblaScreenshot.module.scss';

interface EmblaScreenshotProps {
  screenshots: string[];
  onImageClick?: (src: string) => void;
}

const EmblaScreenshot: React.FC<EmblaScreenshotProps> = ({ screenshots, onImageClick }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => setSelectedIndex(emblaApi.selectedScrollSnap()));
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={styles.emblaWrapper}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {screenshots.map((src, idx) => (
            <div className={styles.emblaSlide} key={idx}>
              <img
                src={src}
                alt={`screenshot-${idx}`}
                className={styles.projectImage}
                onClick={() => onImageClick && onImageClick(src)}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className={styles.emblaPrev}
        onClick={scrollPrev}
        aria-label="Précédent"
        type="button"
      >
        ‹
      </button>
      <button
        className={styles.emblaNext}
        onClick={scrollNext}
        aria-label="Suivant"
        type="button"
      >
        ›
      </button>
    </div>
  );
};

export default EmblaScreenshot;
