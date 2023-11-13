"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '../styles/navbar.module.css'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
          <ul className={styles.nav_ul}>
            <li className={styles.nav_li}>
              <Link className={`link ${pathname === '/' ? styles.active : ''}`} href="/" aria-label="Home">
            
                  <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon }  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
            
              </Link>
            </li>
            <li className={styles.nav_li}>
              <Link className={`link ${pathname === '/about' ? styles.active : ''}`} href="/about" aria-label="About">
            
                  <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                  </svg>
            
              </Link>
            </li>
            <li className={styles.nav_li}>
              <Link className={`link ${pathname === '/contact' ? styles.active : ''}`} href="/contact" aria-label="Contact">
            
                  <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
            
              </Link>
            </li>
          </ul>
      </nav>
    </header>
  )
}

export default Navbar