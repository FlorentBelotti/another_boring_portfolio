import React, { useRef, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

interface EmblaCarouselProps {
  slides: React.ReactNode[];
  options?: any;
}

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ slides, options }) => {
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className="embla" ref={emblaRef} style={{ width: '100%', height: '100%' }}>
      <div className="embla__container" style={{ display: 'flex', height: '100%' }}>
        {slides.map((slide, idx) => (
          <div className="embla__slide" key={idx} style={{ flex: '0 0 100%', height: '100%' }}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
