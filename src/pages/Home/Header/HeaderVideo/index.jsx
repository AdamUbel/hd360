import React from "react";

import styles from "./styles.module.css";

import VideoBG from "../../../../assets/videos/file.mp4";

const HeaderVideo = () => {
  return (
    <video autoPlay loop muted id={styles.video}>
      <source src={VideoBG} type="video/mp4" />
    </video>
  );
};

export default HeaderVideo;
