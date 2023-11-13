"use client"
import React, { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const Reveal = ({ children, width = "fit-content"}) => {
  const ref = useRef (null);
  const isInView = useInView(ref, { once: true });

  const mainControl = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden"}}>
      <motion.div
        variants={{hidden: {opacity: 0, y: 75, filter: "blur(4px)"}, visible: {opacity: 1, y: 0, filter: "blur(0px)"}}}
        initial="hidden"
        animate={mainControl}
        transition={{duration: 1}}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Reveal