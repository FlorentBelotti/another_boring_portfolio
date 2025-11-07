import styles from './logo.module.scss'
import nero from '../../../assets/images/img_nero.png'

export default function Logo() {
  return (
    <div className={styles.logo_container}>
        <div className={styles.img_container}>
            <img src={nero} alt="Nero" className={styles.logo_image} />
        </div>
        <div className={styles.logo_title}>
            <div className={styles.logo_title_1}>
                <div className={styles.text_1}> ANOTHER BORING </div>
                <div className={styles.eye}> </div>
            </div>
            <div className={styles.text_2}>PORTFOLIO</div>
        </div>
    </div>
  )
}