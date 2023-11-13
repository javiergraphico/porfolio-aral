import React from 'react'
import styles from './about.module.css'
import TitleAbout from '@/components/TitleAbout'
import ContenidoAbout from '@/components/ContenidoAbout'
import ResumenAbout from '@/components/ResumenAbout'
import CardSinfondo from '@/components/CardSinfondo'
import CardYoutube from '@/components/CardYoutube'
import CardInstagram from '@/components/CardInstagram'
import CardCv from '@/components/CardCv'


const About = () => {
  return (
    <>
      <div className="contenedor">
        <div className={styles.grid}>
          <main className={styles.main}>
            <section className={styles.py}>
              <TitleAbout />
            </section>
            <ContenidoAbout />
            <ResumenAbout />
          </main>
          <aside className={styles.sidebar}>
            <CardSinfondo />
            <CardCv />
            <CardYoutube />
            <CardInstagram />
          </aside>
        </div>
      </div>
    </>
  )
}

export default About