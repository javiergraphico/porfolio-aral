
import FotoUsuario from '@/components/FotoUsuario'
import styles from './page.module.css'
import WebStack from '@/components/WebStack'
import HomeTitle from '@/components/HomeTitle'
import Informat from '@/components/Informat'
import Featured from '@/components/Featured'
import CardYoutube from '@/components/CardYoutube'
import CardInstagram from '@/components/CardInstagram'
import CardSinfondo from '@/components/CardSinfondo'

export default function Home() {
  return (
    <>
      <div className="contenedor">
        <div className={styles.grid}>
          <main className={styles.main}>
            <FotoUsuario />
            <HomeTitle />
            <WebStack />
            <Informat />
            <Featured />
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
