import React from "react";

import { AiFillPhone, AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaVimeo, FaTwitterSquare } from "react-icons/fa";

import styles from "./styles.module.css";

const ContactInfo = ({ image, contactInfo }) => {
  const { title, email, phone, facebook, insta, youtube, vimeo, twitter } = contactInfo;
  return (
    <section className={styles.contact_info}>
      {image && <div className={styles.contact_image} style={{ backgroundImage: `url(${image})` }}></div>}
      <h1 className={styles.contactinfo_title}>{title}.</h1>
      <div className={styles.contact_types}>
        <div>
          <AiFillPhone className={styles.type_icon} />
          <h2>{phone}</h2>
        </div>
        <div>
          <MdEmail className={styles.type_icon} />
          <h2>{email}</h2>
        </div>
      </div>
      <div className={styles.contact_socials}>
        <AiFillFacebook />
        <AiFillInstagram />
        <AiFillYoutube />
        <FaTwitterSquare />
        <FaVimeo />
      </div>
    </section>
  );
};

export default ContactInfo;
