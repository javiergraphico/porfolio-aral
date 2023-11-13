import React from 'react'
import Image from 'next/image'
import styles from '../styles/contenidoabout.module.css'
import ImagenAbout from '../public/about_me.webp'

const ContenidoAbout = () => {
  return (
    <>
      <div className={styles.grid}>
        <div>
          <Image
            src={ImagenAbout}
            alt='Imagen About'
            width={1500}
            height={1000}
            className={styles.imagen}
            priority
          />
        </div>
        <div className={styles.conten_text}>
          <h2 className={styles.title_h2}>About Me</h2>
          <p>Lorem Ipsum es el término para referirnos a un texto falso que simula
            caracteres latinos y que utilizamos para ver de un modo rápido cómo
            quedaría una página con el contenido; antes de tener el texto
            definitivo, para componer fácilmente la maqueta.</p>
            <br />
          <p>Lorem Ipsum es el término para referirnos a un texto falso que simula
            caracteres latinos y que utilizamos para ver de un modo rápido cómo
            quedaría una página con el contenidomaqueta.</p>
            <br />
          <p>Lorem Ipsum es el término para referirnos a un texto falso que simula
            caracteres latinos antes de tener el texto
            definitivo, para componer fácilmente la maqueta.</p>
        </div>
        <div className={styles.conten_text}>
          <h2 className={styles.title_h2}>Career</h2>
          <p>Lorem Ipsum es el término para referirnos a un texto falso que simula
            caracteres latinos y que utilizamos para ver de un modo rápido cómo
            quedaría una página con el contenido; antes de tener el texto
            definitivo, para componer fácilmente la maqueta.</p>
            <br />
          <p>Lorem Ipsum es el término para referirnos a un texto falso que simula
            caracteres latinos y que utilizamos para ver de un modo rápido cómo
            quedaría una página con el contenido; antes de tener el texto
            definitivo, para componer fácilmente la maqueta.</p>
        </div>

      </div>
    </>
  )
}

export default ContenidoAbout