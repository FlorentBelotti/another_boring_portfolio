import styles from './nextPage.module.scss'

interface NextPageProps {
  className?: string
}

export default function NextPage({ className }: NextPageProps) {

  return (
    <div className={`${styles.container} ${className || ''}`}>
      <div className={styles.textContainer}>
        <p className={styles.text1}>
          WOULD<br/>YOU LIKE TO
        </p>
        <p className={styles.text2}>
          KNOW<br/>MORE?
        </p>
      </div>
    </div>
  )
}
