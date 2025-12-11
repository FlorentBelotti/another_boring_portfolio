import { useEffect, useState } from 'react';

import styles from './resumeMobile.module.scss'

import me from '../../assets/photos/Me.webp'

import PointCloudImage from '../animations/pointCloudImage'
import SeeProject from '../fragments/resume/bloc-3/seeProject';
import Contact from '../fragments/common/contact';
import AboutMe from '../fragments/resume/bloc-3/aboutMe';
import { LOREM } from '../../constants/texts';
import Summary from '../fragments/resume/bloc-3/summary';
import ExperienceAccordion from '../fragments/resume/bloc-2/experienceAccordion';
import { experiences } from '../../constants/experiences';
import { formations } from '../../constants/formations';
import { aboutMe } from '../../constants/contents';

export default function ResumeMobile({ onSeeProject }: { onSeeProject?: () => void } = {}) {

  const [_isFirefox, setIsFirefox] = useState(false)

  useEffect(() => {
    const ua = typeof navigator !== 'undefined' ? navigator.userAgent : ''
    setIsFirefox(/firefox/i.test(ua))
  }, [])  

  const leftBlock = (
    <div className={styles.block}>
        <div className={styles.imageContainer}>
          <PointCloudImage src={me}
          particleSize={4}
          particleStep={12}
          mouseRadius={3000}/>
        </div>
        <AboutMe text={aboutMe}></AboutMe>
        <Summary></Summary>
        <Contact></Contact>
        <div className={styles.experiencesContainer}>
          <h2>EXPERIENCES</h2>
          <ExperienceAccordion experiences={experiences} ></ExperienceAccordion>
        </div>
        <div className={styles.experiencesContainer}>
          <h2>FORMATIONS</h2>
            <ExperienceAccordion experiences={formations} ></ExperienceAccordion>
        </div>
        <div onClick={onSeeProject} style={{ cursor: 'pointer' }}>
          <SeeProject />
        </div>
    </div>
  )

  const centerBlock = (
    <div className={`${styles.block} ${styles.center}`}> </div>
  )

  const rightBlock = (
    <div className={styles.block}> 
      <div onClick={onSeeProject} style={{ cursor: 'pointer' }}>
        <SeeProject />
      </div>
      <Summary></Summary>
      <AboutMe text={LOREM}></AboutMe>
      <Contact></Contact>
    </div>
  )

  return { leftBlock, centerBlock, rightBlock }
}