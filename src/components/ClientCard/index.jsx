import React from "react";

import { FaRegUserCircle } from "react-icons/fa";
import { HiStar, HiOutlineStar } from "react-icons/hi";

import { urlFor } from "../../lib/client";

import styles from "./styles.module.css";

const ClientCard = ({ image, name, rating, review }) => {
  const ratingArr = [1, 2, 3, 4, 5];
  let imgurl = "";

  if (image) {
    imgurl = urlFor(image);
  }

  return (
    <div className={styles.card}>
      <div className={styles.card_client}>
        {imgurl !== "" ? (
          <img src={imgurl} alt="Client Picture" className={styles.client_img} />
        ) : (
          <FaRegUserCircle className={styles.card_client_img} />
        )}
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
