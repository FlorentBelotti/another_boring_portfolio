import styles from './marquee.module.scss'

interface MarqueeProps {
  text: string
  duration?: number
}

export default function Marquee({ text, duration = 32 }: MarqueeProps) {
  const repeatedText = `${text} ${text} ${text} ${text} `
  
  return (
    <div className={styles.marquee}>
      <div 
        className={styles.track}
        style={{ animationDuration: `${duration}s` }}
      >
        <span className={styles.content}>{repeatedText}</span>
        <span className={styles.content}>{repeatedText}</span>
      </div>
    </div>
  )
}
