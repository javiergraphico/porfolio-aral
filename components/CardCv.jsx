import React from "react";
import Image from "next/image";
import styles from "../styles/cardcv.module.css";
import ImgDownload from "../public/img_cv.svg";
import DownloadButton from "./DownloadButton";

const CardCv = () => {
  return (
    <>
      <div className={styles.card}>
        <h3 className={styles.title}>Checkout my resume</h3>
        <div className={styles.conten_icon}>
          <Image
            src={ImgDownload}
            alt="whatsapp"
            width={120}
            height={120}
          />
        </div>
        <div className={styles.conten_button}>
          <DownloadButton />
        </div>
      </div>
    </>
  );
};

export default CardCv;
