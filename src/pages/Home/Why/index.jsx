import React, { useEffect, useState, useRef } from "react";
import Statement from "../../../components/Statement/index.jsx";

// sanity import
import { client } from "../../../lib/client.js";

import { useInView } from "framer-motion";

import styles from "./styles.module.css";

const Why = () => {
  const ref = useRef(null);

  const isInView = useInView(ref);

  const [reasons, setReasons] = useState([]);

  useEffect(() => {
    let mounted = true;

    const getReasons = async () => {
      const q = '*[_type == "why"]';
      const reasonsData = await client.fetch(q);
      if (mounted) {
        setReasons(reasonsData[0].statement);
      }
    };
    getReasons();

    return () => (mounted = false);
  }, []);

  return (
    <section id="why">
      <h1 className={styles.title}>
        How <span>We</span> Can Benefit You and Your Business.
      </h1>
      <div className={styles.reasons} ref={ref}>
        {reasons.length > 0 && reasons.map((el, i) => <Statement key={i} statement={el} inView={isInView} />)}
      </div>
      <a className={styles.service_btn} href="/industries">
        SERVICES WE OFFER
      </a>
    </section>
  );
};

export default Why;
