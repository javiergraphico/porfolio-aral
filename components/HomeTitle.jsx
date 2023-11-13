import React from "react";
import styles from "../styles/hometitle.module.css";
import Reveal from "./Reveal";

const HomeTitle = () => {
  return (
    <>
      <section>
        <article>
          <Reveal>
            <h1 className={styles.title_h1}>
              Bridging the gap
              <br />
              between
              <br />
              <span className={styles.title_color}>Engineering & Design.</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className={styles.description}>
              Lorem Ipsum es el término para referirnos a un texto falso que simula
              caracteres latinos y que utilizamos para ver de un modo rápido cómo
              quedaría una página con el contenido; antes de tener el texto
              definitivo, para componer fácilmente la maqueta.
            </p>
          </Reveal>
        </article>
        <article>
          <Reveal>
            <h2 className={styles.article_h2}>
              Blending Design and Development to Create Exceptional Experiences
            </h2>
          </Reveal>
          <Reveal>
            <p className={styles.article_dos}>
              Lorem Ipsum es el término para referirnos a un texto falso que simula
              caracteres latinos y que utilizamos para ver de un modo rápido cómo
              quedaría una página con el contenido; antes de tener el texto
              definitivo, para componer fácilmente la maqueta.
            </p>
          </Reveal>
          <br />
          <Reveal>
            <p className={styles.article_dos_dos}>
              Lorem Ipsum es el término para referirnos a un texto falso que simula
              caracteres latinos y que utilizamos para ver de un modo rápido cómo
              quedaría una página.
            </p>
          </Reveal>
        </article>
      </section>
    </>
  );
};

export default HomeTitle;
