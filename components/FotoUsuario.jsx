import React from 'react'
import Image from 'next/image'
import Avatar from '../public/Usuario.webp'
import styles from '../styles/fotousuario.module.css'

const FotoUsuario = () => {
  return (
    <>
      <picture className={styles.imagen_conten}>
        <Image
          className={styles.imagen_circle} 
          src={Avatar}
          alt="Avatar"
          width={60}
          height={60}
        />
        
      </picture>
    
    </>
  )
}

export default FotoUsuario