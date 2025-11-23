import { useEffect, useState } from 'react';

import styles from './works.module.scss'

export default function Works() {

  const [isFirefox, setIsFirefox] = useState(false)

  useEffect(() => {
    const ua = typeof navigator !== 'undefined' ? navigator.userAgent : ''
    setIsFirefox(/firefox/i.test(ua))
  })

  const leftBlock = (
    <div className={styles.block}>
    </div>
  )

  const centerBlock = (
    <div className={`${styles.block} ${styles.center}`}>
    </div>
  )

  const rightBlock = (
    <div className={styles.block}> 
    </div>
  )

  return { leftBlock, centerBlock, rightBlock }
}