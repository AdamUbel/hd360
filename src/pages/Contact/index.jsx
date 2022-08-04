import React from "react";

import { MdOutlineEmail } from "react-icons/md";

import styles from "./styles.module.css";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me:</h2>

      <div className={styles.contact_container}>
        <div className={styles.contact_options}>
          <article className={styles.contact_option}>
            <MdOutlineEmail className={styles.contact_option_icon} />
            <h4>Email:</h4>
            <h5>info@hd360prod.com</h5>
            <a href="mailto:info@hd360prod.com">Send an Email</a>
          </article>
        </div>
        {/* NOTE input area */}
        <form>
          <label className={styles.label}>Full Name:</label>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <label className={styles.label}>Email:</label>
          <input type="text" name="email" placeholder="Your Email" required />
          <label className={styles.label}>Additional Info:</label>
          <textarea name="message" rows="7" placeholder="Ex: Tell me more about this project" required></textarea>
          <button type="submit" className={styles.btn}>
            Send Message
          </button>
        </form>
      </div>

      <small>Any additional questions please reach out:</small>
      <a href="mailto:info@hd360prod.com">
        <small>info@hd360prod.com</small>
      </a>
    </section>
  );
};

export default Contact;
