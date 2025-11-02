import styles from './resume.module.scss'

export default function Resume() {
  return (
    <>
      <section className={styles.block}>
        <h2>Section 1</h2>
        <p>Welcome to Resume section 1</p>
      </section>
      
      <section className={styles.block}>
        <h2>Section 2</h2>
        <p>Welcome to Resume section 2</p>
      </section>
      
      <section className={styles.block}>
        <h2>Section 3</h2>
        <p>Welcome to Resume section 3</p>
      </section>
    </>
  )
}