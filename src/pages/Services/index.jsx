import React from "react";
import Selections from "../../components/Selections";

import styles from "./styles.module.css";

const Services = () => {
  return (
    <div>
      <div className={styles.service_header}>
        <h1>Industries</h1>
        <h2>Served</h2>
      </div>
      <Selections />
      <>Selected</>
    </div>
  );
};

export default Services;
