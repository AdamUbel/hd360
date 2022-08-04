import React from "react";

import { FaRegUserCircle } from "react-icons/fa";
import { HiStar, HiOutlineStar } from "react-icons/hi";

import styles from "./styles.module.css";

const ClientCard = ({ name, rating, review }) => {
  const ratingArr = [1, 2, 3, 4, 5];

  return (
    <div className={styles.card}>
      <div className={styles.card_client}>
        <FaRegUserCircle className={styles.card_client_img} />
        <h2>{name}</h2>
        <div>
          {ratingArr.map((el, i) => {
            return el <= rating ? <HiStar key={i} /> : <HiOutlineStar key={i} />;
          })}
        </div>
      </div>
      <div className={styles.card_review}>{review}</div>
    </div>
  );
};

export default ClientCard;
