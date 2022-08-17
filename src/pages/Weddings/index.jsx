import React, { useEffect, useState } from "react";

import { client, urlFor } from "../../lib/client";

import { motion } from "framer-motion";

import styles from "./styles.module.css";

const Events = () => {
  const [eventData, setEventData] = useState();

  useEffect(() => {
    let mounted = true;

    const getData = async () => {
      const q = '*[_type == "events"]';
      const data = await client.fetch(q);
      if (mounted) {
        setEventData(data[0]);
      }
    };
    getData();

    return () => (mounted = false);
  }, []);

  return (
    <section id="events">
      {eventData && (
        <React.Fragment>
          <div className={styles.event_header}>
            <div className={styles.header_img} style={{ backgroundImage: `url(${urlFor(eventData.header)})` }} />
            <h1>{eventData.title}</h1>
          </div>

          <div className={styles.video_container}>
            <h2>Planning A Day Full Of Memories?</h2>
            <h1>
              Let Us <span>Preserve Those Memories</span> For A Lifetime.
            </h1>
            {eventData.video && (
              <video className={styles.video} controls loop>
                <source src={eventData.video} type="video/mp4" />
              </video>
            )}
          </div>

          <div className={styles.content_container}>
            <h1>Check Out Some Photo Shoot Examples</h1>
            {eventData.photos.length > 0 && (
              <div className={styles.photos_container}>
                {eventData.photos.map((el, i) => {
                  return (
                    <motion.img
                      whileHover={{ scale: 1.025 }}
                      key={i}
                      className={styles.photo}
                      src={`${urlFor(el)}`}
                      alt=""
                    />
                  );
                })}
              </div>
            )}
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

export default Events;
