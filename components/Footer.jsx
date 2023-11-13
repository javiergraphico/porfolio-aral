import React from 'react'
import Link from 'next/link'
import { FaBehance } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithubAlt } from 'react-icons/fa'
import styles from '../styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <hr />
        <div className={styles.footer_content}>
          <p className={styles.copyright}>Copyright &copy; Javiergraphico. All Rights Reserved</p>
          <div className={styles.sociales}>
            <Link href="https://www.behance.net/javiertovar" target="_blank">
              <FaBehance className={styles.icons} width={30} height={30} />
            </Link>
            <Link href="https://www.linkedin.com/in/javier-tovar-46687a177/" target="_blank">
              <FaLinkedinIn className={styles.icons} width={30} height={30}/>
            </Link>
            <Link href="https://github.com/javiertovar" target="_blank">
              <FaGithubAlt className={styles.icons} width={30} height={30}/>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer