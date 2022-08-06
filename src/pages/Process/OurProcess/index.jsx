import React, { useEffect, useState } from "react";
import ApproachCard from "../../../components/ApproachCard";

import { client } from "../../../lib/client.js";

import styles from "./styles.module.css";

const OurProcess = () => {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let mounted = true;

    const getApproachData = async () => {
      const q = '*[_type == "approachbio"]';
      const approachData = await client.fetch(q);
      if (mounted) {
        setTitle(approachData[0]["title"]);
        setDesc(approachData[0]["description"]);
      }
    };
    getApproachData();

    const getApproachCards = async () => {
      const q = '*[_type == "approach"]';
      const approachCards = await client.fetch(q);
      if (mounted) {
        setCards(approachCards);
      }
    };
    getApproachCards();

    return () => (mounted = false);
  }, []);

  return (
    <section>
      <div className={styles.section_container}>
        <div className={styles.approach_bio}>
          {title && <h1>{title}</h1>}
          {desc && <p>{desc}</p>}
        </div>
        <div className={styles.process_grid}>
          {cards.length > 0 &&
            cards.map((el, i) => {
              return <ApproachCard key={i} className={styles.grid_item} title={el?.title} desc={el?.description} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
