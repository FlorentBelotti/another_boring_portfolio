import { useEffect, useState } from 'react';
import styles from './home.module.scss'
import EmblaCarousel from '../fragments/home/bloc-1/emblaCarousel'
import Marquee from "react-fast-marquee";
import building from '../../assets/images/img_brutal_build.jpg'
import { WORKS_LIST } from '../../constants/works'
import Logo from '../fragments/home/bloc-1/logo'
import Contact from '../fragments/common/contact';
import Introduction from '../fragments/home/bloc-2/introduction'
import NextPage from '../fragments/home/bloc-2/nextPage'
import Icons from '../fragments/home/bloc-2/icons'
import PointCloudImage from '../animations/pointCloudImage'

const SLIDES = WORKS_LIST.map(work => work.name)

export default function Home({ onNextPage }: { onNextPage?: () => void } = {}) {

  const [_isFirefox, setIsFirefox] = useState(false)

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
      <PointCloudImage src={building}
          particleSize={3}
          particleStep={8}
          mouseRadius={3000}/>
    </div>
  )

  const rightBlock = (
    <div className={styles.block}>
      <div onClick={onNextPage} style={{ cursor: 'pointer' }}>
        <NextPage />
      </div>
      <Marquee speed={40} pauseOnHover className={styles.marquee}>
        CECI EST UN TEST DE TEXTE ÉCRIS SUFFISAMMENT LONG
      </Marquee>
      <Icons></Icons>
      <Introduction text="v0.1.11 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo." />
    </div>
  )

  return { leftBlock, centerBlock, rightBlock }
}