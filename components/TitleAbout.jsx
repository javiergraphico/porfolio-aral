import React from "react";
import styles from "../styles/titleabout.module.css";

const TitleAbout = () => {
  return (
    <div>
      <h1>
        Hi. I'm Steffen Hirth
        <br />
        Also Known As,
        <br />
        <span className={styles.title_color}>@steffen</span>
      </h1>
    </div>
  );
};

export default TitleAbout;
