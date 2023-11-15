"use client";
import React from "react";
import { useState } from "react";
import styles from "../styles/formulario.module.css";

const Formulario = () => {

  const [name, setName] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, last, email, message);
    setName("");
    setLast("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.formulario}>
        <div className={styles.conten_grid}>
          <div className={styles.conten_row}>
            <label className={styles.first} htmlFor="name">
              First Name
            </label>
            <input
              className={styles.name}
              placeholder="Enter your first name"
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
          <div className={styles.conten_row}>
            <label className={styles.first} htmlFor="last">
              Last Name
            </label>
            <input
              className={styles.name}
              placeholder="Enter your Last name"
              type="text"
              name="last"
              onChange={(e) => setLast(e.target.value)}
              value={last}
              required
            />
          </div>
        </div>

        <div className={styles.conten}>
          <label className={styles.label} htmlFor="email">
            Email:
          </label>
          <input
            className={styles.name}
            placeholder="Enter your email"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            //La propiedad required en JavaScript se utiliza para indicar si un campo de entrada input debe ser completado
            required
          />
        </div>

        <div className={styles.conten}>
          <label htmlFor="mensaje">Message</label>
          <textarea
            placeholder="Write your message"
            name="message"
            cols="30"
            rows="10"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
        </div>

        <input className={styles.btn} type="submit" value="Enviar" />
      </form>
    </>
  );
};

export default Formulario;
