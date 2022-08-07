import React, { useEffect, useState } from "react";
import LeftCol from "../../../components/LeftCol/index.jsx";
import RightCol from "../../../components/RightCol/index.jsx";

import { client, urlFor } from "../../../lib/client.js";

import styles from "./styles.module.css";

const VideoType = () => {
  const [videoTypes, setVideoTypes] = useState([]);

  useEffect(() => {
    let mounted = true;

    const getVideoTypes = async () => {
      const q = '*[_type == "videotype"]';
      const videoTypes = await client.fetch(q);
      if (mounted) {
        setVideoTypes(videoTypes);
      }
    };
    getVideoTypes();

    return () => (mounted = false);
  }, []);

  return (
    <section className={styles.type_container}>
      <h2 className={styles.type_subtitle}>In The Meantime,</h2>
      <h1 className={styles.type_title}>
        Explore Key Video Styles <span>You</span> Can Benefit From.
      </h1>
      {videoTypes.length > 0 &&
        videoTypes.map((el, i) => {
          return i % 2 === 0 ? (
            <LeftCol key={i} img={urlFor(el?.image)} title={el?.title} desc={el?.reasons} />
          ) : (
            <RightCol key={i} img={urlFor(el?.image)} title={el?.title} desc={el?.reasons} />
          );
        })}
    </section>
  );
};

export default VideoType;
