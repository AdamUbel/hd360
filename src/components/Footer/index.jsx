import React from "react";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className={styles.footer_container}>
        <div className={styles.directory}>
          <a>Home</a>
          <a>Services</a>
          <a>Contact</a>
          <a>Our Process</a>
          <a>Portfolio</a>
        </div>

        <small className={styles.footer_cpr}>© 2021-2022 HD360 Productions. All rights reserved.</small>
      </div>
    </section>
  );
};

export default Footer;
