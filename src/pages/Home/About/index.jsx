import React, { useEffect, useState } from "react";

import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

import { client, urlFor } from "../../../lib/client.js";

import styles from "./styles.module.css";

const About = () => {
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState();
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
        setImgUrl(urlFor(aboutData[0]["image"]));
      }
    };
    getAbout();

    return () => (mounted = false);
  }, []);

  return (
    <section id="about">
      <div className={styles.about_container}>
        {imgUrl && (
          <div className={styles.info_container} style={{ backgroundImage: `url(${imgUrl})` }}>
            <div className={styles.greeting}>
              <h1>{title}</h1>
              <h3>{subTitle}</h3>
              <div className={styles.greeting_box}>{about && about.map((el, i) => <p key={i}>{el}</p>)}</div>
              <div className={styles.socials}>
                <a href="https://www.instagram.com/hd360productions/" target="_blank">
                  <BsInstagram />
                </a>

                <a href="https://twitter.com/HD360prod" target="_blank">
                  <FaTwitterSquare />
                </a>

                <a href="https://www.youtube.com/channel/UCMQNsfFLgnFq5AD2f8bWrNg/featured" target="_blank">
                  <BsYoutube />
                </a>

                <a href="https://www.facebook.com/HD360Productions" target="_blank">
                  <FaFacebookSquare />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
