import styles from './logo.module.scss'
import nero from '../../../../assets/images/Nero.webp'
import PointCloudImage from '../../../animations/pointCloudImage'
import Eye from './eye'

export default function Logo() {
  return (
    <div className={styles.logo_container}>
        <div className={styles.img_container}>
            <PointCloudImage src={nero}
            particleSize={2}
            particleStep={5}
            mouseRadius={3000}/>
        </div>
        <div className={styles.logo_title}>
            <div className={styles.logo_title_1}>
              <div className={styles.logo_title_1_text}>
                <div className={styles.text_1_1}> ANOTHER </div>
                <div className={styles.text_1_2}> BORING </div>
              </div>
                <div className={styles.eye}>
                  <Eye />
                </div>
            </div>
            <div className={styles.text_2}>PORTFOLIO</div>
        </div>
    </div>
  )
}