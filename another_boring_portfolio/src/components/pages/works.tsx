import PageTransition from '../transition/pageTransition'
import styles from './works.module.scss'

export default function Works() {
  return (
    <>
      <PageTransition
        index={0} 
        enableTransition={true}
        className={styles.block}
      >
        <section>
          <h2>Works Section 1</h2>
          <p>My projects here</p>
        </section>
      </PageTransition>
      
      <PageTransition 
        index={0} 
        enableTransition={true}
        className={styles.block}
      >
        <section>
          <h2>Works Section 2</h2>
          <p>More projects</p>
        </section>
      </PageTransition>
      
      <PageTransition 
        index={0} 
        enableTransition={true}
        className={styles.block}
      >
        <section>
          <h2>Works Section 3</h2>
          <p>Even more projects</p>
        </section>
      </PageTransition>
    </>
  )
}