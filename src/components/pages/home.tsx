import { useEffect, useState } from 'react';
import styles from './home.module.scss'
import EmblaCarousel from '../fragments/home/bloc-1/emblaCarousel'
import Marquee from "react-fast-marquee";
import seneca from '../../assets/images/Seneca.webp'
import { WORKS_LIST } from '../../constants/works'
import Logo from '../fragments/home/bloc-1/logo'
import Contact from '../fragments/common/contact';
import Introduction from '../fragments/home/bloc-2/introduction'
import NextPage from '../fragments/home/bloc-2/nextPage'
import Icons from '../fragments/home/bloc-2/icons'
import PointCloudImage from '../animations/pointCloudImage'
import { introduction } from '../../constants/contents';
import { useIsMobile } from '../../hooks/useIsMobile';

const SLIDES = WORKS_LIST.map(work => work.name)

export default function Home({ onNextPage }: { onNextPage?: () => void } = {}) {

  const [_isFirefox, setIsFirefox] = useState(false)
  const isSmallScreen = useIsMobile(1600)
  console.log({isSmallScreen});

  useEffect(() => {
    const ua = typeof navigator !== 'undefined' ? navigator.userAgent : ''
    setIsFirefox(/firefox/i.test(ua))
  }, []) 

  const leftBlock = (
    <div className={styles.block}>
      <Logo />
      <EmblaCarousel 
        slides={SLIDES} 
        autoplayDelay={4000}
      />
      <Contact />
    </div>
  )

  const centerBlock = (
    <div className={styles.block}>
            <PointCloudImage 
          key={isSmallScreen ? 'mobile' : 'desktop'}
          src={seneca}
          particleSize={isSmallScreen ? 5 : 3}
          particleStep={isSmallScreen ? 6 : 5}
          mouseRadius={3000}/>
    </div>
  )

  const rightBlock = (
    <div className={styles.block}>
      <div onClick={onNextPage} style={{ cursor: 'pointer' }}>
        <NextPage />
      </div>
      <Marquee speed={40} pauseOnHover className={styles.marquee}> FULLSTACK DEVELOPER • DATA ENGINEER • CREATIVE DESIGNED • HISTORY ENJOYER • </Marquee>
      <Icons></Icons>
      <Introduction text={introduction}/>
    </div>
  )

  return { leftBlock, centerBlock, rightBlock }
}