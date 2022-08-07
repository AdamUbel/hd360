import React, { useRef } from "react";

import { motion, useInView } from "framer-motion";

import styles from "./styles.module.css";

const Showcase = ({ name, img, reasons }) => {
  const ref = useRef(null);

  const inView = useInView(ref);

  return (
    <section
      ref={ref}
      style={{
        width: inView ? "100%" : "80%",
        transform: inView ? "none" : "translateX(-200px)",
        opacity: inView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
      }}
    >
      <div className={styles.card_container}>
        <div className={styles.card_wrapper}>
          <div className={styles.background_img} style={{ backgroundImage: `url(${img})` }}></div>
          <div className={styles.left_col}>
            <h1>{name}</h1>
            <motion.a whileHover={{ scale: 1.1 }} className={styles.discover_btn}>
              Discover More
            </motion.a>
          </div>
          <div className={styles.right_col}>
            <div className={styles.reason_container}>
              <ul>
                {reasons.length > 0 &&
                  reasons.map((el, i) => (
                    <motion.li whileHover={{ x: 15 }} className={styles.reason} key={i}>
                      {el}
                    </motion.li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
