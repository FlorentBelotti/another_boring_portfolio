import React from 'react'
import styles from './emblaCarousel.module.scss'

type PropType = {
  selected: boolean
  index: number
  onClick: () => void
  label: string
}

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, onClick, label } = props

  return (
    <div
      className={`${styles['embla-thumbs__slide']} ${
        selected ? styles['embla-thumbs__slide--selected'] : ''
      }`}
    >
      <button
        onClick={onClick}
        type="button"
        className={styles['embla-thumbs__slide__number']}
      >
        {label}
      </button>
    </div>
  )
}