"use client";
import React from "react";
import styles from '../styles/formulario.module.css'

const Formulario = () => {
  return (
    <>
      <form className={styles.formulario}>
        <div className={styles.conten_grid}>
          <div className= {styles.conten_row}>
            <label className={styles.label} htmlFor="nombre">First Name</label>
            <input className={styles.name} placeholder="Enter your first name" type="text" name="nombre"   />
          </div>
          <div className= {styles.conten_row}>
            <label className={styles.label} htmlFor="nombre">Last Name</label>
            <input className={styles.name} placeholder="Enter your Last name" type="text" name="nombre"   />
          </div>
        </div>

        <div 
          className={styles.conten}>
          <label className={styles.label} htmlFor="email">Email:</label>
          <input className={styles.name} placeholder="Enter your email" type="email" name="email" />
        </div>

        <div 
          className={styles.conten}>
          <label htmlFor="mensaje">Message</label>
          <textarea placeholder="Write your message" name="mensaje"  cols="30" rows="10"></textarea>
        </div>

        <input className={styles.btn} type="submit" value="Enviar" />
      </form>
    </>
  );
};

export default Formulario;