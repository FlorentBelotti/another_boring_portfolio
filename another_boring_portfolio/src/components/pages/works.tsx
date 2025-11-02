import styles from './works.module.scss'

export default function Works() {
  return (
    <>
      <section className={styles.block}>
        <h2>Section 1</h2>
        <p>Welcome to Works section 1</p>
      </section>
      
      <section className={styles.block}>
        <h2>Section 2</h2>
        <p>Welcome to Works section 2</p>
      </section>
      
      <section className={styles.block}>
        <h2>Section 3</h2>
        <p>Welcome to Works section 3</p>
      </section>
    </>
  )
}