import React from "react";
import styles from "../styles/HomeTitle.module.css";

const HomeTitle = () => {
  return (
    <>
      <section>
        <article>
          <h1 className={styles.title_h1}>
            Bridging the gap
            <br />
            between
            <br />
            <span className={styles.title_color}>Engineering & Design.</span>
          </h1>
          <p className={styles.description}>
            Lorem Ipsum es el término para referirnos a un texto falso que simula
            caracteres latinos y que utilizamos para ver de un modo rápido cómo
            quedaría una página con el contenido; antes de tener el texto
            definitivo, para componer fácilmente la maqueta.
          </p>
        </article>
        <article>
          <h2 className={styles.article_h2}>
            Blending Design and Development to Create Exceptional Experiences
          </h2>
          <p className={styles.article_dos}>
            Lorem Ipsum es el término para referirnos a un texto falso que simula
            caracteres latinos y que utilizamos para ver de un modo rápido cómo
            quedaría una página con el contenido; antes de tener el texto
            definitivo, para componer fácilmente la maqueta.
          </p>
          <br />
          <p className={styles.article_dos_dos}>
            Lorem Ipsum es el término para referirnos a un texto falso que simula
            caracteres latinos y que utilizamos para ver de un modo rápido cómo
            quedaría una página.
          </p>
        </article>
      </section>
    </>
  );
};

export default HomeTitle;
