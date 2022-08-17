import React, { useEffect, useState } from "react";

import { client, urlFor } from "../../lib/client";

import { motion } from "framer-motion";

import styles from "./styles.module.css";

const Business = () => {
  const [businessData, setBusinessData] = useState();

  useEffect(() => {
    let mounted = true;

    const getData = async () => {
      const q = '*[_type == "business"]';
      const data = await client.fetch(q);
      if (mounted) {
        setBusinessData(data[0]);
      }
    };
    getData();

    return () => (mounted = false);
  }, []);

  return (
    <section id="business">
      {businessData && (
        <React.Fragment>
          <div className={styles.business_header}>
            <div className={styles.header_img} style={{ backgroundImage: `url(${urlFor(businessData.header)})` }} />
            <h1>{businessData.title}</h1>
          </div>

          <div className={styles.video_container}>
            <h1>
              Watch A <span>Previous Project</span> by HD360 Productions.
            </h1>
            {businessData.video && (
              <video className={styles.video} controls loop>
                <source src={businessData.video} type="video/mp4" />
              </video>
            )}
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_img} style={{ backgroundImage: `url(${urlFor(businessData.image)})` }}></div>
            <div className={styles.content_wrapper}>
              <h1>{businessData.serviceheader}</h1>
              {businessData.services.length > 0 &&
                businessData.services.map((el, i) => {
                  return (
                    <motion.p key={i} whileHover={{ scale: 1.1 }}>
                      {" "}
                      {el}
                    </motion.p>
                  );
                })}
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

export default Business;
