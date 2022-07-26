import React from "react";

import styles from "./styles.module.css";

const Why = () => {
  return (
    <section id="why">
      <h1 className={styles.title}>Why Choose HD360 Productions?</h1>
      <div className={styles.reasons}>
        <h2 className={styles.reason}>64% of consumers make purchases based on promotional video.</h2>
        <h2 className={styles.reason}>
          Viewers retain 95% of a message when they watch it in a video compared to 10% when reading it in text.
        </h2>
        <h2 className={styles.reason}>
          54% of consumers want to see more video content from a brand or business they support.
        </h2>
        <h2 className={styles.reason}>88% of marketers are satisfied with the ROI that video delivers.</h2>
        <h2 className={styles.reason}>Video content is preferred marketing tool by 86% of marketing professionals.</h2>
      </div>
      <a className={styles.service_btn}>SERVICES WE OFFER</a>
    </section>
  );
};

export default Why;
