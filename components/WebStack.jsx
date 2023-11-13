import React from "react";
import styles from "../styles/webstack.module.css";
import Image from "next/image";
import img01 from "../public/img_modern.svg";
import img02 from "../public/img_Certified.svg";
import img03 from "../public/img_Learner.svg";

const WebStack = () => {
  return (
    <>
      <article className={styles.fondo_web}>
        <div className={styles.grid_modern}>
          <div className={styles.modern}>
            {/* card 01 */}
            <div className={styles.modern_card}>
              <Image
                src={img01}
                alt="Modern Web Stack"
                className={styles.modern_content_img}
                width={150}
                height={150}
                priority
              />
              <div className={styles.modern_content_text}>
                <h3>Modern Web Stack</h3>
                <p className={styles.modern_description}>
                  Lorem Ipsum es el término para referirnos a un texto falso que
                  simula caracteres latinos y que utilizamos para ver de un modo
                  rápido cómo quedaría una página con el contenido; antes de
                  tener el texto definitivo, para componer fácilmente la
                  maqueta.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.grid_dos}>
          {/* grid-dos */}
          <div className={styles.certifiel}>
            <div className={styles.certifiel_card}>
              {/* card 02 */}
              <Image
                src={img02}
                alt="Modern Web Stack"
                className={styles.certifiel_content_img}
                width={150}
                height={150}
                priority
              />
              <div className={styles.certifiel_content_text}>
                <h3>NN/g Certified</h3>
                <p className={styles.certifiel_description}>
                  Lorem Ipsum es el término para referirnos a un texto falso que
                  simula caracteres latinos y que utilizamos para ver de un modo
                  rápido cómo quedaría una página con el contenido; antes de
                  tener el texto definitivo, para componer fácilmente la
                  maqueta.
                </p>
              </div>
            </div>
          </div>
          {/* card 03 */}
          <div className={styles.learner}>
            <div className={styles.learner_card}>
              <Image
                src={img03}
                alt="Modern Web Stack"
                className={styles.learner_content_img}
                width={150}
                height={150}
                priority
              />
              <div className={styles.learner_content_text}>
                <h3>Lifelong Learner</h3>
                <p className={styles.learner_description}>
                  Lorem Ipsum es el término para referirnos a un texto falso que
                  simula caracteres latinos y que utilizamos para ver de un modo
                  rápido cómo quedaría una página con el contenido; antes de
                  tener el texto definitivo, para componer fácilmente la
                  maqueta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WebStack;
