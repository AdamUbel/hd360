import React from "react";

import { FaRegUserCircle } from "react-icons/fa";
import { HiStar } from "react-icons/hi";

import styles from "./styles.module.css";

const Testimonies = () => {
  return (
    <section id="testimonies">
      <div className={styles.testimonies_container}>
        <div className={styles.header}>
          <h1>
            We Always Strive For <span>Your </span> Satisfaction.
          </h1>
          <h4>And we're proud to say our clients can agree.</h4>
        </div>
        <div className={styles.card_container}>
          <div className={styles.card}>
            <div className={styles.card_client}>
              <FaRegUserCircle className={styles.card_client_img} />
              <h2>John Doe</h2>
              <div>
                <HiStar />
                <HiStar />
                <HiStar />
                <HiStar />
                <HiStar />
              </div>
            </div>
            <div className={styles.card_review}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita voluptatum eveniet dolorem.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_client}>
              <FaRegUserCircle className={styles.card_client_img} />
              <h2>John Doe</h2>
              <div>
                <HiStar />
                <HiStar />
                <HiStar />
                <HiStar />
                <HiStar />
              </div>
            </div>
            <div className={styles.card_review}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita voluptatum eveniet dolorem.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_client}>
              <FaRegUserCircle className={styles.card_client_img} />
              <h2>John Doe</h2>
              <div>
                <HiStar />
                <HiStar />
                <HiStar />
                <HiStar />
                <HiStar />
              </div>
            </div>
            <div className={styles.card_review}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita voluptatum eveniet dolorem.
            </div>
          </div>
        </div>
        <a className={styles.book_btn}>Book With Us Today</a>
      </div>
    </section>
  );
};

export default Testimonies;
