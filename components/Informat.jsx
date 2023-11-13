"use client";
import React from "react";
import styles from "../styles/informat.module.css";
import Image from "next/image";
import  InfoData  from "../DataUsabilidad";

const Informat = () => {
  
  
  return (
    <div className={styles.grid_card}>
      {InfoData.map((data, index) => (
        <div className={styles.card} key={index}>
          <Image
            src={data.svg}
            style={{ width: 50, height: 50, borderRadius: "8px", padding: "10px"}}
            alt={data.title}
            width={50}
            height={50}
          />
          <h3 className={styles.title}>{data.title}</h3>
          <p>{data.description}</p>
        </div> 
      ))}
    </div>
  )
  
}

export default Informat;
