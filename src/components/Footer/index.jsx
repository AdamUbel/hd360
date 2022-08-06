import React from "react";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className={styles.footer_container}>
        <div className={styles.directory}>
          <a href="/">Home</a>
          <a href="/industries">Services</a>
          <a href="/contact">Contact</a>
          <a href="/our-process">Our Process</a>
          <a href="/portfoio">Portfolio</a>
        </div>

        <small className={styles.footer_cpr}>© 2021-2022 HD360 Productions. All rights reserved.</small>
      </div>
    </section>
  );
};

export default Footer;
