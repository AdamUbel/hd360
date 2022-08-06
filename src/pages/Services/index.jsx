import React, { useEffect, useState } from "react";
import Showcase from "../../components/Showcase/index.jsx";

// sanity client
import { client, urlFor } from "../../lib/client.js";

import styles from "./styles.module.css";

const Services = () => {
  const [serviceArr, setServiceArr] = useState([]);

  useEffect(() => {
    let mounted = true;

    const getData = async () => {
      const q = '*[_type == "service"]';
      const serviceData = await client.fetch(q);
      if (mounted) {
        setServiceArr(serviceData);
      }
    };
    getData();

    return () => (mounted = false);
  }, []);

  return (
    <div>
      <div className={styles.service_header}>
        <h1>Industries</h1>
        <h2>Served</h2>
      </div>
      <div className={styles.card_container}>
        {serviceArr.length > 0 &&
          serviceArr.map((el, i) => <Showcase key={i} name={el?.name} reasons={el?.reasons} img={urlFor(el?.image)} />)}
      </div>
    </div>
  );
};

export default Services;
