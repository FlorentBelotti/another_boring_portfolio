import PageTransition from '../transition/pageTransition'
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <PageTransition 
        index={0} 
        enableTransition={true}
        className={styles.block}
      >
        <section>
          <h2>Section 1</h2>
          <p>Welcome to Home page section 1</p>
        </section>
      </PageTransition>
      
      <PageTransition 
        index={0} 
        enableTransition={true}
        className={styles.block}
      >
        <section>
          <h2>Section 2</h2>
          <p>Welcome to Home page section 2</p>
        </section>
      </PageTransition>
      
      <PageTransition 
        index={0} 
        enableTransition={true}
        className={styles.block}
      >
        <section>
          <h2>Section 3</h2>
          <p>Welcome to Home page section 3</p>
        </section>
      </PageTransition>
    </>
  )
}