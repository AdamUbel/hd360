import React from "react";

import styles from "./styles.module.css";

import VIDEO from "../../../../assets/videos/file.mp4";

const HeaderVideo = ({ url }) => {
  return (
    <video autoPlay playsInline loop muted id={styles.video}>
      <source src={VIDEO} type="video/mp4" />
      {/* NOTE sanity video from API call */}
      {/* <source src={url} type="video/mp4" /> */}
    </video>
  );
};

export default HeaderVideo;
