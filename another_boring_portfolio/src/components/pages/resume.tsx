import { useEffect, useState } from 'react';

import styles from './resume.module.scss'

import me from '../../assets/photos/sujet.png'

import PointCloudImage from '../animations/pointCloudImage'
import Logo from '../fragments/home/bloc-1/logo';

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
        particleSize={8}
        particleStep={16}
        mouseRadius={3000}/>
      )}
    </div>
  )

  const centerBlock = (
    <div className={styles.block}> </div>
  )

  const rightBlock = (
    <div className={styles.block}> </div>
  )

  return { leftBlock, centerBlock, rightBlock }
}