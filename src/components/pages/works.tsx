import { type MouseEvent, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./works.module.scss";
import EmblaCarouselWorks from "../fragments/works/bloc-1/emblaCarouselWorks";
import EmblaScreenshot from "../fragments/works/bloc-3/emblaScreenshot";
import WorkDetails from "../fragments/works/bloc-1/workDetails";
import WorkObservations from "../fragments/works/bloc-1/workObservations";
import { WORKS_LIST } from "../../constants/works";
import TechLogos from "../fragments/works/bloc-2/techLogos";
import ProjectMeta from "../fragments/works/bloc-2/projectMeta";
import ProjectAccordion from "../fragments/works/bloc-2/projectAccordion";

const SLIDES = WORKS_LIST;

export default function Works() {
  const [_isFirefox, setIsFirefox] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [modalImageIndex, setModalImageIndex] = useState<number | null>(null);
  const [modalScreenshots, setModalScreenshots] = useState<string[]>([]);
  const [_emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [_selectedIndex, setSelectedIndex] = useState(0);
  const screenshots = SLIDES[currentSlideIndex].screenshots || [];
  const isImageModalOpen =
    modalImageIndex !== null && modalScreenshots.length > 0;

  useEffect(() => {
    const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
    setIsFirefox(/firefox/i.test(ua));
  }, []);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () =>
        setSelectedIndex(emblaApi.selectedScrollSnap()),
      );
    }
  }, [emblaApi, currentSlideIndex]);

  const formatArrayDetails = (
    arr: string[] | undefined,
    fallback: string = "No data available",
  ): string => {
    return arr && Array.isArray(arr) && arr.length > 0
      ? arr.join("\n")
      : fallback;
  };

  const handleSlideChange = (index: number) => {
    setCurrentSlideIndex(index);
  };

  const handleImageClick = (index: number) => {
    setModalScreenshots(screenshots);
    setModalImageIndex(index);
  };

  const handleCloseModal = () => {
    setModalImageIndex(null);
    setModalScreenshots([]);
  };

  const handlePrevModalImage = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (!modalScreenshots.length || modalImageIndex === null) return;
    setModalImageIndex(
      (modalImageIndex - 1 + modalScreenshots.length) % modalScreenshots.length,
    );
  };

  const handleNextModalImage = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (!modalScreenshots.length || modalImageIndex === null) return;
    setModalImageIndex((modalImageIndex + 1) % modalScreenshots.length);
  };

  useEffect(() => {
    if (!isImageModalOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseModal();
        return;
      }

      if (event.key === "ArrowLeft") {
        if (!modalScreenshots.length || modalImageIndex === null) return;
        setModalImageIndex(
          (modalImageIndex - 1 + modalScreenshots.length) %
            modalScreenshots.length,
        );
      }

      if (event.key === "ArrowRight") {
        if (!modalScreenshots.length || modalImageIndex === null) return;
        setModalImageIndex((modalImageIndex + 1) % modalScreenshots.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isImageModalOpen, modalImageIndex, modalScreenshots]);

  const leftBlock = (
    <div className={`${styles.block} ${styles.left}`}>
      <EmblaCarouselWorks
        slides={SLIDES}
        options={{ loop: true }}
        autoplayDelay={4000}
        onSlideChange={handleSlideChange}
      />
      <WorkDetails
        year={SLIDES[currentSlideIndex].year}
        company={SLIDES[currentSlideIndex].company}
        title={SLIDES[currentSlideIndex].title}
        role={SLIDES[currentSlideIndex].role}
        projectType={SLIDES[currentSlideIndex].projectType}
      />
      <WorkObservations observation={SLIDES[currentSlideIndex].observation} />
      <TechLogos technologies={SLIDES[currentSlideIndex].technologies} />
    </div>
  );

  const centerBlock = (
    <div className={`${styles.block} ${styles.center}`}>
      <ProjectMeta
        tag={SLIDES[currentSlideIndex].tag}
        type={SLIDES[currentSlideIndex].type}
        githubLink={SLIDES[currentSlideIndex].sourceLink}
        demoLink={SLIDES[currentSlideIndex].demoLink}
      />
      <div className={styles.innerContent}>
        <ProjectAccordion
          projects={[
            {
              title: "Description",
              details:
                SLIDES[currentSlideIndex]?.description ||
                "No description available",
            },
            {
              title: "Features",
              details: formatArrayDetails(
                SLIDES[currentSlideIndex]?.features,
                "No features available",
              ),
            },
            {
              title: "Challenges",
              details: formatArrayDetails(
                SLIDES[currentSlideIndex]?.challenges,
                "No challenges available",
              ),
            },
            {
              title: "Tasks",
              details: formatArrayDetails(
                SLIDES[currentSlideIndex]?.tasks,
                "No tasks available",
              ),
            },
          ]}
        />
      </div>
    </div>
  );

  const rightBlock = (
    <div className={`${styles.block} ${styles.right}`}>
      {screenshots.length > 0 ? (
        <EmblaScreenshot
          screenshots={screenshots}
          onImageClick={handleImageClick}
        />
      ) : (
        <div className={styles.noImage}>No image available</div>
      )}
      {isImageModalOpen && modalImageIndex !== null && (
        <div className={styles.imageModal} onClick={handleCloseModal}>
          <button
            type="button"
            className={`${styles.modalArrow} ${styles.modalArrowPrev}`}
            onClick={handlePrevModalImage}
            aria-label="Previous image"
          >
            ‹
          </button>
          <img
            src={modalScreenshots[modalImageIndex]}
            alt={`fullscreen-${modalImageIndex}`}
            className={styles.fullscreenImage}
            onClick={(event) => event.stopPropagation()}
          />
          <button
            type="button"
            className={`${styles.modalArrow} ${styles.modalArrowNext}`}
            onClick={handleNextModalImage}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );

  return { leftBlock, centerBlock, rightBlock };
}
