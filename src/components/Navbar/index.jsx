import React from "react";

import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar}>
        <ul className={styles.nav_items}>
          <li className={styles.nav_item}>Home</li>
          <li className={styles.nav_item}>About</li>
          <li className={styles.nav_item}>Why Us</li>
          <li className={styles.nav_item}>Contact</li>
          <li className={styles.nav_item}>Portfolio</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
