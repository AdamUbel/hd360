import React, { useState, useEffect } from "react";

import { client, urlFor } from "../../../lib/client.js";

import styles from "./styles.module.css";

const ProcessHeader = () => {
  const [imgUrl, setImgUrl] = useState();
  const [title, setTitle] = useState();

  useEffect(() => {
    let mounted = true;

    const getProcessHeader = async () => {
      const q = '*[_type == "process"]';
      const processData = await client.fetch(q);
      if (mounted) {
        setTitle(processData[0]["title"]);
        setImgUrl(processData[0]["header"]);
      }
    };
    getProcessHeader();

    return () => (mounted = false);
  }, []);

  return (
    <section className={styles.process_header_container}>
      {imgUrl && <div className={styles.image} style={{ backgroundImage: `url(${urlFor(imgUrl)})` }}></div>}
      {title && <h1 className={styles.title}>{title}</h1>}
    </section>
  );
};

export default ProcessHeader;
