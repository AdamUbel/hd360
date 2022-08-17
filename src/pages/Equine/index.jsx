import React, { useEffect, useState } from "react";

import { client, urlFor } from "../../lib/client";

import { motion } from "framer-motion";

import styles from "./styles.module.css";

const Equine = () => {
  const [equineData, setEquineData] = useState();

  useEffect(() => {
    let mounted = true;

    const getData = async () => {
      const q = '*[_type == "equine"]';
      const data = await client.fetch(q);
      if (mounted) {
        setEquineData(data[0]);
      }
    };
    getData();

    return () => (mounted = false);
  }, []);

  return (
    <section id="equine">
      {equineData && (
        <React.Fragment>
          <div className={styles.equine_header}>
            <div className={styles.header_img} style={{ backgroundImage: `url(${urlFor(equineData.header)})` }} />
          </div>

          <div className={styles.video_container}>
            <h1>
              Watch A <span>Previous Project</span> by HD360 Productions.
            </h1>
            {equineData.video && (
              <video className={styles.video} controls loop>
                <source src={equineData.video} type="video/mp4" />
              </video>
            )}
          </div>

          <div className={styles.story_container}>
            <div className={styles.story_img} style={{ backgroundImage: `url(${urlFor(equineData.image)})` }}></div>
            <div className={styles.story_wrapper}>
              <h1>{equineData.title}</h1>
              <p>{equineData.story}</p>
            </div>
          </div>
        </React.Fragment>
      )}

      <div className={styles.service_explore}>
        <h2>Any Addtional Questions?</h2>
        <h3>
          Reach Out To Us <span>AnyTime</span>.
        </h3>
        <motion.p whileHover={{ scale: 1.2 }}>Email: info@hd360prod.com</motion.p>
        <motion.p whileHover={{ scale: 1.2 }}>Phone: (908) 801-6265 </motion.p>
      </div>
    </section>
  );
};

export default Equine;
