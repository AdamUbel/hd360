import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

import styles from "./styles.module.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar}>
        <div className={styles.nav_items}>
          <NavLink className={({ isActive }) => (isActive ? styles.nav_item_active : styles.nav_item)} to="/">
            Home
          </NavLink>
          <NavLink
            onMouseLeave={() => setShow(false)}
            onMouseOver={() => setShow(true)}
            className={({ isActive }) => (isActive ? styles.nav_item_active : styles.nav_item)}
            to="/industries"
          >
            Services
            {show ? (
              <MdKeyboardArrowDown style={{ position: "relative", transform: "translateY(25%)" }} />
            ) : (
              <MdKeyboardArrowRight style={{ position: "relative", transform: "translateY(25%)" }} />
            )}
            {show && (
              <div className={styles.drop_down}>
                <NavLink to={"/business"}>Business</NavLink>
                <NavLink to={"/equine"}>Equine</NavLink>
                <NavLink to={"/events"}>Events</NavLink>
              </div>
            )}
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
