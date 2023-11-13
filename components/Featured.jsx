import React from "react";
import styles from "../styles/featured.module.css";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
import { BiLogoCodepen } from "react-icons/bi";
import { PiGitlabLogoSimpleBold } from "react-icons/pi";

const Featured = () => {
  return (
    <>
      <section>
        <h2>Featured Projects</h2>
        <div className={styles.flex_card}>
          <Link href="https://www.linkedin.com/in/javier-tovar-46687a177/" target="_blank" className={styles.card}>
            <div className={styles.conten}>
              <div className={styles.icon}>
                <PiGitlabLogoSimpleBold className={styles.codepen} />
              </div>
              <h3 className={styles.title_h3}>Rho gemini</h3>
            </div>
            <p className={styles.description}>
              Lorem Ipsum fue popularizado por el fabricante de tipografía
              publicitarias. Letraset ofrecía páginas de que fueron ampliamente
              utilizadas en la era anterior a los ordenadores para los diseños.
            </p>
            <div className={styles.icon_arrow}>
              <FaLocationArrow />
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/javier-tovar-46687a177/" target="_blank" className={styles.card}>
            <div className={styles.conten}>
              <div className={styles.icon}>
                <BiLogoCodepen className={styles.codepen} />
              </div>
              <h3 className={styles.title_h3}>Rho gemini</h3>
            </div>
            <p className={styles.description}>
              Lorem Ipsum fue popularizado por el fabricante de tipografía
              publicitarias. Letraset ofrecía páginas de que fueron ampliamente
              utilizadas en la era anterior a los ordenadores para los diseños.
            </p>
            <div className={styles.icon_arrow}>
              <FaLocationArrow />
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Featured;
