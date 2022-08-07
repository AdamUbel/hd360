import React, { useRef } from "react";

import { motion, useScroll, useInView, useTransform } from "framer-motion";

import styles from "./styles.module.css";

const RightCol = ({ img, title, desc }) => {
  const rightRef = useRef(null);
  const inView = useInView(rightRef);

  const { scrollY } = useScroll();

  const y2 = useTransform(scrollY, [0, 600], [0, -50], { clamp: false });

  return (
    <section className={styles.col_container}>
      <div className={styles.right_desc}>
        <h1 className={styles.right_title}>{title}</h1>
        <h3 className={styles.right_bio}>{desc}</h3>
      </div>
      <motion.img
        src={img}
        alt="VideoType Image"
        className={styles.right_img}
        ref={rightRef}
        style={{ y: inView ? y2 : 0, x: 0 }}
      />
    </section>
  );
};

export default RightCol;
