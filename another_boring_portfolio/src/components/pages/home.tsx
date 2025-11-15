import styles from './home.module.scss'
// import building from '../../assets/images/img_building.png'
// import seneca from '../../assets/images/img_seneca_col.png'
import baldwin from '../../assets/images/img_baldwin_col.png'
import bwipo from '../../assets/images/img_bwipo.png'
import patern from '../../assets/images/img_brutalism_patern.jpg'
import paradise from '../../assets/images/img_paradise_lost.jpg'
import brutal from '../../assets/images/img_brutal_build.jpg'
import satan from '../../assets/images/img_satan_descend.png'
import paradise_col from '../../assets/images/img_paradise_lost_col_alone.png'
import Logo from '../fragments/home/bloc-1/logo'
import EmblaCarousel from '../fragments/home/bloc-1/emblaCarousel'
import { WORKS_LIST } from '../../constants/works'
import Contact from '../fragments/home/bloc-1/contact'
import Marquee from '../fragments/home/bloc-2/marquee'
import Introduction from '../fragments/home/bloc-2/introduction'
import NextPage from '../fragments/home/bloc-2/nextPage'
import Icons from '../fragments/home/bloc-2/icons'
import PointCloudImage from '../animations/pointCloudImage'

const OPTIONS = { 
  loop: true,
  duration: 25,
  skipSnaps: false,
  dragFree: false,
  containScroll: 'trimSnaps'
}
const SLIDES = WORKS_LIST

const DESCRIPTIONS = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
]

export default function Home() {
  const leftBlock = (
    <div className={styles.block}>
      <Logo />
      <EmblaCarousel 
        slides={SLIDES} 
        options={OPTIONS} 
        autoplayDelay={4000}
        descriptions={DESCRIPTIONS}
      />
      <Contact />
    </div>
  )

  const centerBlock = (
    <div className={styles.block}>
      <PointCloudImage src={brutal}/>
    </div>
  )

  const rightBlock = (
    <div className={styles.block}>
      <NextPage />
      <Marquee text="Lorem ipsum dolor sit amet" duration={32} />
      <Icons></Icons>
      <Introduction text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo." />
    </div>
  )

  return { leftBlock, centerBlock, rightBlock }
}