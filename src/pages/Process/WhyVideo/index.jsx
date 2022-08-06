import React, { useEffect, useState } from "react";

import { client } from "../../../lib/client.js";

import styles from "./styles.module.css";

import { motion } from "framer-motion";

const WhyVideo = () => {
  const [whyVideo, setWhyVideo] = useState();

  useEffect(() => {
    let mounted = true;

    const getWhyData = async () => {
      const q = '*[_type == "whyvideo"]';
      const whyData = await client.fetch(q);
      if (mounted) {
        setWhyVideo(whyData[0]);
      }
    };
    getWhyData();

    return () => (mounted = false);
  }, []);

  return (
    <section className={styles.whyvideo_container}>
      <div>
        <h1 className={styles.title}>{whyVideo && whyVideo.title}</h1>
      </div>
      <ul className={styles.list}>
        {whyVideo &&
          whyVideo.reasons.map((el, i) => {
            return (
              <motion.li whileHover={{ scale: 1.1 }} className={styles.list_item} key={i}>
                {el}
              </motion.li>
            );
          })}
      </ul>
      <motion.a whileHover={{ scale: 0.9 }} href="/contact" className={styles.ready_btn}>
        Ready to Expand?
      </motion.a>
      <div>
        <p className={styles.not_ready}>If You Aren't Ready Just Yet No Problem!</p>
        <p className={styles.not_ready2}>We Can Still Help Set Up A Timeline</p>
      </div>
    </section>
  );
};

export default WhyVideo;
