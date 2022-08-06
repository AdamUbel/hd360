import React from "react";
import ProcessHeader from "./Header";
import OurProcess from "./OurProcess";
import OurSteps from "./OurSteps";
import VideoType from "./VideoType";
import WhyVideo from "./WhyVideo";

const Process = () => {
  return (
    <section>
      <ProcessHeader />
      <OurProcess />
      <VideoType />
      <WhyVideo />
      <OurSteps />
    </section>
  );
};

export default Process;
