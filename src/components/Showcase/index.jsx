import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { motion, useInView } from "framer-motion";

import { AiOutlineDoubleRight } from "react-icons/ai";

import styles from "./styles.module.css";

const Showcase = ({ name, img, reasons, route }) => {
  const ref = useRef(null);

  const inView = useInView(ref);

  return (
    <section>
      <div className={styles.card_container}>
        <div className={styles.card_wrapper}>
          <div className={styles.background_img} style={{ backgroundImage: `url(${img})` }}></div>
          <div className={styles.left_col}>
            <div className={styles.left_wrapper}>
              <h1>{name}</h1>
              <div className={styles.reason_container}>
                <ul
                  ref={ref}
                  style={{
                    width: inView ? "100%" : "80%",
                    transform: inView ? "none" : "translateX(-200px)",
                    opacity: inView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
                  }}
                >
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
          <div className={styles.right_col}>
            <div>
              <Link to={`/${route}`} className={styles.discover_btn}>
                <motion.h3 whileHover={{ scale: 1.05 }}>
                  Discover More <AiOutlineDoubleRight className={styles.discover_arrow} />
                </motion.h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
