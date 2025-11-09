import styles from './home.module.scss'
import building from '../../assets/images/img_building.png'
import Logo from '../fragments/home/logo'
import EmblaCarousel from '../fragments/home/emblaCarousel'

const OPTIONS = { 
  loop: false,
  duration: 25,
  skipSnaps: false,
  dragFree: false,
  containScroll: 'trimSnaps'
}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
  const leftBlock = (
    <div className={styles.block}>
      <Logo />
      <div style={{ marginTop: '2rem' }}>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
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