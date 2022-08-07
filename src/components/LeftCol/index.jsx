import React, { useRef } from "react";

import { motion, useScroll, useInView, useTransform } from "framer-motion";

import styles from "./styles.module.css";

const LeftCol = ({ img, title, desc }) => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const { scrollY } = useScroll();

  const y2 = useTransform(scrollY, [0, 600], [0, -50], { clamp: false });

  return (
    <section className={styles.col_container}>
      <motion.img
        src={img}
        alt="VideoType Image"
        className={styles.left_img}
        ref={ref}
        style={{ y: inView ? y2 : 0, x: 0 }}
      />
      <div className={styles.left_desc}>
        <h1 className={styles.left_title}>{title}</h1>
        <h3 className={styles.left_bio}>{desc}</h3>
      </div>
    </section>
  );
};

export default LeftCol;
