import React from "react";
import styles from "../styles/titleabout.module.css";
import Reveal from "./Reveal";

const TitleAbout = () => {
  return (
    <div>
      <Reveal>
        <h1>
          Hi. I'm Steffen Hirth
          <br />
          Also Known As,
          <br />
          <span className={styles.title_color}>@steffen</span>
        </h1>
      </Reveal>
    </div>
  );
};

export default TitleAbout;
