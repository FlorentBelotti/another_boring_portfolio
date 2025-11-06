import PageTransition from '../transition/pageTransition'
import styles from './resume.module.scss'

export default function Resume() {
  return (
    <>
      <PageTransition 
        index={0} 
        enableTransition={true}
        className={styles.block}
      >
        <section>
          <h2>Resume Section 1</h2>
          <p>Resume content here</p>
        </section>
      </PageTransition>
      
      <PageTransition 
        index={0} 
        enableTransition={true}
        className={styles.block}
      >
        <section>
          <h2>Resume Section 2</h2>
          <p>More resume content</p>
        </section>
      </PageTransition>
      
      <PageTransition 
        index={0} 
        enableTransition={true}
        className={styles.block}
      >
        <section>
          <h2>Resume Section 3</h2>
          <p>Even more resume content</p>
        </section>
      </PageTransition>
    </>
  )
}