import React, { useEffect, useState } from "react";

import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

import { client } from "../../../client";

import styles from "./styles.module.css";

const About = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [about, setAbout] = useState([]);

  useEffect(() => {
    let mounted = true;

    const getAbout = async () => {
      const q = '*[_type == "about"]';
      const aboutData = await client.fetch(q);
      if (mounted) {
        setTitle(aboutData[0]["title"]);
        setSubTitle(aboutData[0]["subTitle"]);
        setAbout(aboutData[0]["description"]);
      }
    };
    getAbout();

    return () => (mounted = false);
  }, []);

  return (
    <section id="about">
      <div className={styles.about_container}>
        <div className={styles.info_container}>
          <div className={styles.greeting}>
            <h1>{title}</h1>
            <h3>{subTitle}</h3>
            <div className={styles.greeting_box}>{about && about.map((el, i) => <p key={i}>{el}</p>)}</div>
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
