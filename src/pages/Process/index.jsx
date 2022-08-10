import React from "react";
import ProcessHeader from "./Header";
import OurProcess from "./OurProcess";
import OurSteps from "./OurSteps";
import VideoType from "./VideoType";
import WhyVideo from "./WhyVideo";

import styles from "./styles.module.css";

const Process = () => {
  return (
    <section className={styles.container}>
      <ProcessHeader />
      <OurSteps />
      <OurProcess />
      <WhyVideo />
      {/* <VideoType /> */}
    </section>
  );
};

export default Process;
