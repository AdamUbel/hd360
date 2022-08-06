import React from "react";

import { NavLink } from "react-router-dom";

import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar}>
        <div className={styles.nav_items}>
          <NavLink className={({ isActive }) => (isActive ? styles.nav_item_active : styles.nav_item)} to="/">
            Home
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? styles.nav_item_active : styles.nav_item)} to="/industries">
            Services
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? styles.nav_item_active : styles.nav_item)} to="/contact">
            Contact
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.nav_item_active : styles.nav_item)}
            to="/our-process"
          >
            Our Process
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? styles.nav_item_active : styles.nav_item)} to="/portfolio">
            Portfolio
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
