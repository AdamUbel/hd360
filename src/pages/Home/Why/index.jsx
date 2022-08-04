import React, { useEffect, useState } from "react";
import Statement from "../../../components/Statement/index.jsx";

// sanity import
import { client } from "../../../client.js";

import styles from "./styles.module.css";

const Why = () => {
  const [reasons, setReasons] = useState([]);

  useEffect(() => {
    let mounted = true;

    const getReasons = async () => {
      const q = '*[_type == "why"]';
      const reasonsData = await client.fetch(q);
      if (mounted) {
        // console.log(reasonsData[0].statement);
        setReasons(reasonsData[0].statement);
      }
    };
    getReasons();

    return () => (mounted = false);
  }, []);

  return (
    <section id="why">
      <h1 className={styles.title}>Why Choose HD360 Productions?</h1>
      <div className={styles.reasons}>
        {reasons.length > 0 && reasons.map((el, i) => <Statement key={i} statement={el} />)}
      </div>
      <a className={styles.service_btn}>SERVICES WE OFFER</a>
    </section>
  );
};

export default Why;
