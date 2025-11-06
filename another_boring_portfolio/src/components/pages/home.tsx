import styles from './home.module.scss'
import building from '../../assets/images/img_building.png'
import Logo from '../fragments/home/logo'

export default function Home() {
  return (
    <>
      <section className={styles.block}>
        <Logo />

        {/* <h2>Section 1</h2>
        <p>Welcome to Home page section 1</p> */}
      </section>
      
      <section className={styles.block}>
        <img src={building} alt="Placeholder" className={styles.image} />
      </section>
      
      <section className={styles.block}>
        <h2>Section 3</h2>
        <p>Welcome to Home page section 3</p>
      </section>
    </>
  )
}