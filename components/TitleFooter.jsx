import React from 'react'
import styles from '../styles/titlefooter.module.css'
import Reveal from "./Reveal";

const TitleFooter = () => {
  return (
    <div>
      <Reveal>
        <h1 className={styles.title}>
                Want to work with me?
                <br/>
                I’d love to hear from you!
              </h1>
        <p className={styles.text}>Lorem Ipsum es el término para referirnos a un texto falso que simula
              caracteres latinos y que utilizamos para ver de un modo rápido cómo
              quedaría una página con el contenido</p>
              <br />
        <p className={styles.text}>Lorem Ipsum es el término para referirnos a un texto falso que simula
              modo rápido cómo</p>
      </Reveal>
    </div>
  )
}

export default TitleFooter