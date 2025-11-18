import styles from './home.module.scss'
import EmblaCarousel from '../fragments/home/bloc-1/emblaCarousel'
import Marquee from "react-fast-marquee";

import building from '../../assets/images/img_building.png'
import seneca from '../../assets/images/img_seneca_col.png'
import baldwin from '../../assets/images/img_baldwin_col.png'
import bwipo from '../../assets/images/img_bwipo.png'
import patern from '../../assets/images/img_brutalism_patern.jpg'
import paradise from '../../assets/images/img_paradise_lost.jpg'
import brutal from '../../assets/images/img_brutal_build.jpg'
import satan from '../../assets/images/img_satan_descend.png'
import paradise_col from '../../assets/images/img_paradise_lost_col_alone.png'
import draxler from '../../assets/images/img_draxler.png'


import { WORKS_LIST } from '../../constants/works'
import Logo from '../fragments/home/bloc-1/logo'
import Contact from '../fragments/home/bloc-1/contact'
import Introduction from '../fragments/home/bloc-2/introduction'
import NextPage from '../fragments/home/bloc-2/nextPage'
import Icons from '../fragments/home/bloc-2/icons'
import PointCloudImage from '../animations/pointCloudImage'
import { useEffect, useState } from 'react';

const SLIDES = WORKS_LIST

export default function Home() {

  const [isFirefox, setIsFirefox] = useState(false)

  useEffect(() => {
    const ua = typeof navigator !== 'undefined' ? navigator.userAgent : ''
    setIsFirefox(/firefox/i.test(ua))
  })

  const leftBlock = (
    <div className={styles.block}> </div>
  )

  const centerBlock = (
    <div className={styles.block}> </div>
  )

  const rightBlock = (
    <div className={styles.block}> </div>
  )

  return { leftBlock, centerBlock, rightBlock }
}