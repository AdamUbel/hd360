import React from "react";

import styles from "./styles.module.css";

const ContactForm = () => {
  return (
    <section className={styles.form_container}>
      <form action="" className={styles.contact_form}>
        <div className={styles.form_row1}>
          <div>
            <label className={styles.form_label}>Full Name:</label>
            <input className={styles.text_input} type="text" />
          </div>
          <div>
            <label className={styles.form_label}>Email:</label>
            <input className={styles.text_input} type="email" />
          </div>
        </div>
        <div className={styles.form_row2}>
          <div>
            <label className={styles.form_label}>Contact Number:</label>
            <input className={styles.text_input} type="text" />
          </div>
          <div>
            <label className={styles.form_label}>Website:</label>
            <input className={styles.text_input} type="text" />
            <small>*if applicable</small>
          </div>
        </div>
        <div className={styles.form_row3}>
          <p>Service Category:</p>

          <input className={styles.radio_input} type="radio" name="job" id="equine" value="equine" />
          <label className={styles.radio_label} for="equine">
            Equine
          </label>

          <input
            className={styles.radio_input}
            type="radio"
            name="job"
            id="ArchitectureDevelopment"
            value="ArchitectureDevelopment"
          />
          <label className={styles.radio_label} for="ArchitectureDevelopment">
            Architecture & Development
          </label>

          <input className={styles.radio_input} type="radio" name="job" id="Business" value="Business" />
          <label className={styles.radio_label} for="Business">
            Business
          </label>

          <input className={styles.radio_input} type="radio" name="job" id="Products" value="Products" />
          <label className={styles.radio_label} for="Products">
            Products
          </label>

          <input className={styles.radio_input} type="radio" name="job" id="Events" value="Events" />
          <label className={styles.radio_label} for="Events">
            Events
          </label>

          <input className={styles.radio_input} type="radio" name="job" id="Other" value="Other" />
          <label className={styles.radio_label} for="Other">
            Other
          </label>
        </div>

        <div className={styles.form_row4}>
          <label className={styles.form_label}>Additional Comments:</label>
          <textarea name="message" id="" cols="" rows="10" className={styles.text_area}></textarea>
        </div>
        <input type="submit" className={styles.contact_submit} />
      </form>

      <p className={styles.meeting_text}>Want To Schedule a Meeting Instead?</p>
      <a href="https://hd360productions.hbportal.co/schedule/6221716abc0bd61a3bfb6bc7" target={"_blank"}>
        Click Here
      </a>
    </section>
  );
};

export default ContactForm;
