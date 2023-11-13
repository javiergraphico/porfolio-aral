"use client";
import React from "react";
import styles from "../styles/downloadbutton.module.css";
import { BiDownload } from "react-icons/bi";

const DownloadButton = () => {
  const handleDownload = () => {
    const cvUrl = "/Cv-javier-Tovar.pdf"; // Reemplaza con la ruta correcta de tu CV en la carpeta "public"
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Cv-javier-Tovar.pdf"; // Puedes cambiar el nombre del archivo de descarga si lo deseas
    link.click();
  };

  return (
    <>
      <button onClick={handleDownload}>
        <span className={styles.button_decor}></span>
        <div className={styles.button_content}>
          <div className={styles.button_icon}>
            <BiDownload />
          </div>
          <span className={styles.button__text}>Download</span>
        </div>
      </button>
    </>
  );
};

export default DownloadButton;
