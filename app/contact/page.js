import React from 'react'
import styles from './contact.module.css'
import TitleFooter from '@/components/TitleFooter'
import Formulario from '@/components/Formulario'
import CardSinfondo from '@/components/CardSinfondo'
import CardYoutube from '@/components/CardYoutube'
import CardInstagram from '@/components/CardInstagram'

const Contact = () => {
  return (
    <>
      <div className="contenedor">
        <div className={styles.grid}>
          <main className={styles.main}>
            <TitleFooter />
            <Formulario />
          </main>
          <aside className={styles.sidebar}>
            <CardSinfondo />
            <CardYoutube />
            <CardInstagram />
          </aside>
        </div>
      </div>
    </>
  )
}

export default Contact