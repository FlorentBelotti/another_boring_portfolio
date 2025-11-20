import { useEffect, useState } from 'react';

import styles from './resume.module.scss'

import me from '../../assets/photos/me_2.png'

import PointCloudImage from '../animations/pointCloudImage'
import SeeProject from '../fragments/resume/bloc-3/seeProject';
import Contact from '../fragments/common/contact';
import Actions from '../fragments/resume/bloc-3/actions';
import AboutMe from '../fragments/resume/bloc-3/aboutMe';
import { LOREM } from '../../constants/texts';
import Summary from '../fragments/resume/bloc-3/summary';

export default function Resume() {

  const [isFirefox, setIsFirefox] = useState(false)

  useEffect(() => {
    const ua = typeof navigator !== 'undefined' ? navigator.userAgent : ''
    setIsFirefox(/firefox/i.test(ua))
  })

  const leftBlock = (
    <div className={styles.block}>
      {isFirefox ? (
        <img src={me} className={styles.image}/>
      ) : (
        <PointCloudImage src={me}
        particleSize={4}
        particleStep={12}
        mouseRadius={3000}/>
      )}
    </div>
  )

  const centerBlock = (
    <div className={styles.block}> </div>
  )

  const rightBlock = (
    <div className={styles.block}> 
    <SeeProject></SeeProject>
    {/* <Actions></Actions> */}
    <Summary></Summary>
    <AboutMe text={LOREM}></AboutMe>
    <Contact></Contact>
    </div>
  )

  return { leftBlock, centerBlock, rightBlock }
}