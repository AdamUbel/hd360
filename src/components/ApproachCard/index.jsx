import React from "react";

import { motion } from "framer-motion";

import styles from "./styles.module.css";

const ApproachCard = ({ title, desc }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className={styles.card_container}>
      <h2 className={styles.card_title}>{title}</h2>
      <p className={styles.paragraph}>{desc}</p>
    </motion.div>
  );
};

export default ApproachCard;
