import React from "react";

import { motion } from "framer-motion";
import styles from "./styles.module.css";

const Statement = ({ statement, inView }) => {
  return (
    <React.Fragment>
      <div>
        <motion.h2
          className={styles.reason}
          style={{
            transform: inView ? "none" : "translateX(200px)",
            opacity: inView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {statement}
        </motion.h2>
      </div>
    </React.Fragment>
  );
};

export default Statement;
