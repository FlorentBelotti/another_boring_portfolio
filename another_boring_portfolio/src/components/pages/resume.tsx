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
import ExperienceAccordion from '../fragments/resume/bloc-2/experienceAccordion';

  const experiences = [
    { date: '2023 — 2025', title: 'Senior Frontend Engineer', company: 'Acme Corp', pole: 'Web', details: "Conception et maintenance d'interfaces React; optimisation des performances; mentoring d'équipe." },
    { date: '2021 — 2023', title: 'Frontend Engineer', company: 'Beta Studio', pole: 'UI/UX', details: "Refonte UI, amélioration de l'accessibilité, mise en place de tests et workflows CI." },
    { date: '2019 — 2021', title: 'Junior Developer', company: 'Gamma Labs', pole: 'Fullstack', details: "Développement de features, intégration d'API Node.js et déploiements automatisés." },
    { date: '2019 — 2021', title: 'Junior Developer', company: 'Gamma Labs', pole: 'Fullstack', details: "Développement de features, intégration d'API Node.js et déploiements automatisés." },
  ];

  const formations = [
    { date: '2023 — 2025', title: 'Senior Frontend Engineer', company: 'Acme Corp', pole: 'Web', details: "Conception et maintenance d'interfaces React; optimisation des performances; mentoring d'équipe." },
    { date: '2021 — 2023', title: 'Frontend Engineer', company: 'Beta Studio', pole: 'UI/UX', details: "Refonte UI, amélioration de l'accessibilité, mise en place de tests et workflows CI." },
    { date: '2019 — 2021', title: 'Junior Developer', company: 'Gamma Labs', pole: 'Fullstack', details: "Développement de features, intégration d'API Node.js et déploiements automatisés." },
  ];

export default function Resume({ onSeeProject }: { onSeeProject?: () => void } = {}) {

  const [isFirefox, setIsFirefox] = useState(false)

  useEffect(() => {
    const ua = typeof navigator !== 'undefined' ? navigator.userAgent : ''
    setIsFirefox(/firefox/i.test(ua))
  }, [])  

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
    <div className={`${styles.block} ${styles.center}`}>
      <div className={styles.experiencesContainer}>
        <h2>EXPERIENCES</h2>
        <ExperienceAccordion experiences={experiences} ></ExperienceAccordion>
      </div>
      <div className={styles.experiencesContainer}>
        <h2>FORMATIONS</h2>
        <ExperienceAccordion experiences={formations} ></ExperienceAccordion>
      </div>
    </div>
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