"use client";
import React, { useEffect, useState } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';
import styles from '../styles/darkmode.module.css';

const DarkMode = () => {
  const [tema, setTema] = useState('claro');

  const toggleTema = () => {
    setTema((prevTema) => (prevTema === 'claro' ? 'oscuro' : 'claro'));
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', tema);
  }, [tema]);

  return (
    <div className={styles.darkmode}>
      {tema === 'claro' ? (
        <BiMoon className={styles.icon_luna} onClick={toggleTema} />
      ) : (
        <BiSun className={styles.icon_sol} onClick={toggleTema} />
      )}
    </div>
  );
};

export default DarkMode;
