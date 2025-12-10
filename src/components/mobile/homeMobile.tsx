import { useEffect, useState } from 'react';
import { WORKS_LIST } from '../../constants/works'
import { introduction } from '../../constants/contents';

import styles from './homeMobile.module.scss'
import EmblaCarousel from '../fragments/home/bloc-1/emblaCarousel'
import Contact from '../fragments/common/contact';
import Introduction from '../fragments/home/bloc-2/introduction'
import NextPage from '../fragments/home/bloc-2/nextPage'

const SLIDES = WORKS_LIST.map(work => work.name)

export default function HomeMobile({ onNextPage }: { onNextPage?: () => void } = {}) {

  const [_isFirefox, setIsFirefox] = useState(false)

  useEffect(() => {
    const ua = typeof navigator !== 'undefined' ? navigator.userAgent : ''
    setIsFirefox(/firefox/i.test(ua))
  }, []) 

  const leftBlock = (
    <div className={styles.block}>
      <EmblaCarousel 
        slides={SLIDES} 
        autoplayDelay={4000}
      />
      <Introduction text={introduction}/>
      <Contact />
      <div onClick={onNextPage} style={{ cursor: 'pointer' }}>
        <NextPage />
      </div>
    </div>
  )

  return { leftBlock, centerBlock: null, rightBlock: null }
}