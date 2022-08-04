import React from "react";

import { motion } from "framer-motion";
import styles from "./styles.module.css";

const Statement = ({ statement }) => {
  return (
    <React.Fragment>
      <motion.h2 className={styles.reason} initial={{ x: -200 }} animate={{ x: 0 }}>
        {statement}
      </motion.h2>
    </React.Fragment>
  );
};

export default Statement;
