import React, { useEffect, useState } from "react";

import { client, urlFor } from "../../lib/client.js";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

import styles from "./styles.module.css";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState();
  const [imgUrl, setImgUrl] = useState();

  useEffect(() => {
    let mounted = true;

    const getContactData = async () => {
      const q = '*[_type == "contact"]';
      const contactData = await client.fetch(q);
      if (mounted) {
        setContactInfo(contactData[0]);
        setImgUrl(urlFor(contactData[0]["image"]));
      }
    };
    getContactData();

    return () => (mounted = false);
  }, []);

  return (
    <section id="contact" className={styles.contact_container}>
      <div className={styles.contact_header}>
        <div className={styles.contact_header_img}></div>
        <h1>We're Here For You,</h1>
        <h2>Get in Touch.</h2>
      </div>

      <div className={styles.contact_body}>
        {contactInfo && <ContactInfo contactInfo={contactInfo} image={imgUrl} />}
        <ContactForm />
      </div>
      <div className={styles.map_wrapper}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d46095715.73820037!2d-128.1448585!3d45.1575501!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6e475c33c13d8d7e!2sHD360%20Productions!5e0!3m2!1sen!2sus!4v1660155288308!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
