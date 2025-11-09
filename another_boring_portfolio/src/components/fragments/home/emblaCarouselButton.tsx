import React from 'react'
import styles from './emblaCarousel.module.scss'

type PropType = {
  selected: boolean
  index: number
  onClick: () => void
}

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, index, onClick } = props

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
        {index + 1}
      </button>
    </div>
  )
}