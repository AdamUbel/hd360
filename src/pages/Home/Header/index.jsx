import React from "react";
import HeaderVideo from "./HeaderVideo";

import { IoDiamond, IoHappyOutline, IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { GoMegaphone } from "react-icons/go";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <section id={styles.header}>
      <div className={styles.logo}></div>
      <div className={styles.left_col}>
        <div className={styles.company_name}>
          <h1>
            HD<span>360</span>
          </h1>
          <h2>
            Pr<span>oductions</span>
          </h2>
        </div>
        <div className={styles.bg_name}>
          <h6>film maker</h6>
          <h4>photographer</h4>
          <h1>videographer</h1>
        </div>
      </div>
      <div className={styles.right_col}>
        <div className={styles.info_row}>
          <div className={styles.info}>
            <IoDiamond />
            <h1>Inovation</h1>
            <p>Videos That Shine.</p>
          </div>
          <div className={styles.info}>
            <GoMegaphone />
            <h1>Story</h1>
            <p>Videos That Generate Emotions.</p>
          </div>
          <div className={styles.info}>
            <IoHappyOutline />
            <h1>Results</h1>
            <p>Videos That Create Repeat Clients.</p>
          </div>
          <div className={styles.info}>
            <IoChatbubbleEllipsesOutline />
            <h1>Engagement</h1>
            <p>Videos That Are Too Good Not To Share.</p>
          </div>
        </div>
        <HeaderVideo />
      </div>
    </section>
  );
};

export default Header;
