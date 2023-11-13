import React from 'react'
import styles from '../styles/youtubecard.module.css'
import { FaYoutube } from 'react-icons/fa'


const CardYoutube = () => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.conten_icon}>
          <FaYoutube />
        </div>
        <h3>Subscribe to my Channel</h3>
        <p className={styles.text}>Quality Tech + Dev + Coffee Content</p>
        <div className={styles.conten_button}>
          
        </div>
      </div>

    </>
  )
}

export default CardYoutube