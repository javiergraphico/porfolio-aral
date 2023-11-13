import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import styles from '../styles/cardinstagram.module.css'

const CardInstagram = () => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.conten_icon}>
          <BsInstagram className={styles.icon} />
        </div>
        <h3 className={styles.title}>Say Hi On Instagram!</h3>
        <p className={styles.text}>Lorem Ipsum es el término para referirnos a un texto falso que simula
            fácilmente la maqueta.</p>
        


      </div>
    </>
  )
}

export default CardInstagram