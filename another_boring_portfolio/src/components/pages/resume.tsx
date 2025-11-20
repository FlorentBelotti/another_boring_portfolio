import { useEffect, useState } from 'react';

import styles from './resume.module.scss'

import me from '../../assets/photos/me_2.png'

import PointCloudImage from '../animations/pointCloudImage'
import SeeProject from '../fragments/resume/bloc-3/seeProject';
import Contact from '../fragments/common/contact';
// import Actions from '../fragments/resume/bloc-3/actions';
import AboutMe from '../fragments/resume/bloc-3/aboutMe';
import { LOREM } from '../../constants/texts';
import Summary from '../fragments/resume/bloc-3/summary';

export default function Resume() {

  const [isFirefox, setIsFirefox] = useState(false)

  useEffect(() => {
    const ua = typeof navigator !== 'undefined' ? navigator.userAgent : ''
    setIsFirefox(/firefox/i.test(ua))
  })

  const experiences = [
    { date: '2023 — 2025', title: 'Senior Frontend Engineer', company: 'Acme Corp', pole: 'Web', details: 'Détails de la mission, responsabilités et technologies utilisées.' },
    { date: '2021 — 2023', title: 'Frontend Engineer', company: 'Beta Studio', pole: 'UI/UX', details: 'Détails de la mission, réalisations et impact.' },
  ];

  const leftBlock = (
    <div className={styles.block}>
      {/* {isFirefox ? (
        <img src={me} className={styles.image}/>
      ) : ( */}
        <PointCloudImage src={me}
        particleSize={4}
        particleStep={12}
        mouseRadius={3000}/>
      {/* )} */}
    </div>
  )

  const centerBlock = (
    <div className={styles.block}>
      <div className={styles.experiencesContainer}>
        <h2>EXPERIENCES</h2>
      </div>
    </div>
  )

  const rightBlock = (
    <div className={styles.block}> 
    <SeeProject></SeeProject>
    <Summary></Summary>
    <AboutMe text={LOREM}></AboutMe>
    <Contact></Contact>
    </div>
  )

  return { leftBlock, centerBlock, rightBlock }
}