import React from "react";

import styles from "./styles.module.css";

const HeaderVideo = ({ url }) => {
  return (
    <video autoPlay playsInline loop muted id={styles.video}>
      <source src={url} type="video/mp4" />
    </video>
  );
};

export default HeaderVideo;
