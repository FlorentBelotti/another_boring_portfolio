import styles from './home.module.scss'
import building from '../../assets/images/img_building.png'
import Logo from '../fragments/home/logo'
import EmblaCarousel from '../fragments/home/emblaCarousel'
import { WORKS_LIST } from '../../constants/works'

const OPTIONS = { 
  loop: true,
  duration: 25,
  skipSnaps: false,
  dragFree: false,
  containScroll: 'trimSnaps'
}
const SLIDES = WORKS_LIST

export default function Home() {
  const leftBlock = (
    <div className={styles.block}>
      <Logo />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} autoplayDelay={4000} />
    </div>
  )

  const centerBlock = (
    <div className={styles.block}>
      <img src={building} alt="Placeholder" className={styles.image} />
    </div>
  )

  const rightBlock = (
    <div className={styles.block}>
      <h2>Section 3</h2>
      <p>Welcome to Home page section 3</p>
    </div>
  )

  return { leftBlock, centerBlock, rightBlock }
}