import React from "react";

import styles from "./styles.module.css";

import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

import { motion } from "framer-motion";

import { TbArrowsUp } from "react-icons/tb";

import logo from "../../assets/imgs/hd360logo.png";

const Footer = () => {
  const scrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <section id="footer">
      <div className={styles.footer_container}>
        <motion.div
          className={styles.scroll_up}
          onClick={() => scrollUp()}
          animate={{
            y: [40, 30, 25, 30, 40],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.7, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <TbArrowsUp />
        </motion.div>

        <div className={styles.footer_logo}>
          <img src={logo} alt="Logo" />
        </div>

        <div className={styles.directory}>
          <a href="/">Home</a>
          <a href="/industries">Services</a>
          <a href="/contact">Contact</a>
          <a href="/our-process">Our Process</a>
          <a href="/portfoio">Portfolio</a>
        </div>

        <div className={styles.footer_socials}>
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

        <small className={styles.footer_cpr}>© 2021-2022 HD360 Productions. All rights reserved.</small>
      </div>
    </section>
  );
};

export default Footer;
