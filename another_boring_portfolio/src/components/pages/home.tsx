import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <section className={styles.block}>
        <h2>Section 1</h2>
        <p>Welcome to Home page section 1</p>
      </section>
      
      <section className={styles.block}>
        <h2>Section 2</h2>
        <p>Welcome to Home page section 2</p>
      </section>
      
      <section className={styles.block}>
        <h2>Section 3</h2>
        <p>Welcome to Home page section 3</p>
      </section>
    </>
  )
}