import React, { useState, useEffect } from "react";

import styles from "./styles.module.css";
import ClientCard from "../../../components/ClientCard";

import { client } from "../../../client.js";

const Testimonies = () => {
  const [review, setReviews] = useState([]);

  useEffect(() => {
    let mounted = true;

    const getTestimonies = async () => {
      const q = '*[_type == "client"]';
      const reviewData = await client.fetch(q);
      if (mounted) {
        setReviews(reviewData);
      }
    };
    getTestimonies();

    return () => (mounted = false);
  }, []);

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
          {review.length > 0 &&
            review.map((el, i) => <ClientCard key={i} name={el.name} review={el.review} rating={el.rating} />)}
        </div>
        <a className={styles.book_btn}>Book With Us Today</a>
      </div>
    </section>
  );
};

export default Testimonies;
