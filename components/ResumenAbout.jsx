import React from 'react'
import styles from '../styles/resumenabout.module.css'
import {BiLogoCodepen} from 'react-icons/bi'

const ResumenAbout = () => {
  return (
    <div>
        <h2 className={styles.title_h2}>Experience</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.grid_resumen}>
              <div className={styles.linea}></div>
              <div className={styles.img_logo}>
                <BiLogoCodepen className={styles.codepen} />
              </div>
              <div className={styles.conten_resumen}>
                <p className={styles.date}>SEP 2021 · PRESENT</p>
                <h3 className={styles.title_h3}>Senior User Experience Engineer</h3>
                <p className={styles.job}>Rho Impact</p>
                <p className={styles.description}>Lorem Ipsum es el término para referirnos a un texto falso que simula
                caracteres latinos y que utilizamos para ver de un modo rápido cómo
                quedaría una página con el contenido; antes de tener el texto
                definitivo, para componer fácilmente la maqueta.</p>
              </div>
            </div>
          </li>
        </ul>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.grid_resumen}>
              <div className={styles.linea}></div>
              <div className={styles.img_logo}>
                <BiLogoCodepen className={styles.codepen} />
              </div>
              <div className={styles.conten_resumen}>
                <p className={styles.date}>SEP 2021 · PRESENT</p>
                <h3 className={styles.title_h3}>Senior User Experience Engineer</h3>
                <p className={styles.job}>Rho Impact</p>
                <p className={styles.description}>Lorem Ipsum es el término para referirnos a un texto falso que simula
                caracteres latinos y que utilizamos para ver de un modo rápido cómo
                quedaría una página con el contenido; antes de tener el texto
                definitivo, para componer fácilmente la maqueta.</p>
              </div>
            </div>
          </li>
        </ul>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.grid_resumen}>
              <div className={styles.linea}></div>
              <div className={styles.img_logo}>
                <BiLogoCodepen className={styles.codepen} />
              </div>
              <div className={styles.conten_resumen}>
                <p className={styles.date}>SEP 2021 · PRESENT</p>
                <h3 className={styles.title_h3}>Senior User Experience Engineer</h3>
                <p className={styles.job}>Rho Impact</p>
                <p className={styles.description}>Lorem Ipsum es el término para referirnos a un texto falso que simula
                caracteres latinos y que utilizamos para ver de un modo rápido cómo
                quedaría una página con el contenido; antes de tener el texto
                definitivo, para componer fácilmente la maqueta.</p>
              </div>
            </div>
          </li>
        </ul>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.grid_resumen}>
              <div className={styles.linea}></div>
              <div className={styles.img_logo}>
                <BiLogoCodepen className={styles.codepen} />
              </div>
              <div className={styles.conten_resumen}>
                <p className={styles.date}>SEP 2021 · PRESENT</p>
                <h3 className={styles.title_h3}>Senior User Experience Engineer</h3>
                <p className={styles.job}>Rho Impact</p>
                <p className={styles.description}>Lorem Ipsum es el término para referirnos a un texto falso que simula
                caracteres latinos y que utilizamos para ver de un modo rápido cómo
                quedaría una página con el contenido; antes de tener el texto
                definitivo, para componer fácilmente la maqueta.</p>
              </div>
            </div>
          </li>
        </ul>
        
        
    </div>
  )
}

export default ResumenAbout