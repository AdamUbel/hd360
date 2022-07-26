import React from "react";

import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

import styles from "./styles.module.css";

const About = () => {
  return (
    <section id="about">
      <div className={styles.about_container}>
        <div className={styles.info_container}>
          <div className={styles.greeting}>
            <h1>Meet Jarred,</h1>
            <h3>The Man Behind The Camera.</h3>
            <div className={styles.greeting_box}>
              <p>
                {" "}
                I'm a strategic video enthusiast with expertise in the equine industry. Seeking to aid businesses in
                promoting and driving traffic to their respective products by curating and developing strategic videos.
              </p>
              <p>
                Capturing emotion has been one of the driving factors in my video journey. I'm always looking for the
                best angle and perspective to generate the most emotion.{" "}
              </p>
              <p>
                I'm consistently trying to improve myself and my work. I have fallen in love with the art of video
                making and I cannot wait to share it with you!
              </p>
            </div>
            <div className={styles.socials}>
              <BsInstagram />
              <FaTwitterSquare />
              <BsYoutube />
              <FaFacebookSquare />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
