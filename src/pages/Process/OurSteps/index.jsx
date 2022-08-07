import React, { useState, useEffect } from "react";

import { client, urlFor } from "../../../lib/client.js";

import styles from "./styles.module.css";

const OurSteps = () => {
  const [steps, setSteps] = useState([]);
  const [focus, setFocus] = useState(0);

  useEffect(() => {
    let mounted = true;

    const getStepData = async () => {
      const q = '*[_type == "oursteps"]';
      const stepData = await client.fetch(q);
      if (mounted) {
        setSteps(stepData);
      }
    };
    getStepData();

    return () => (mounted = false);
  }, []);

  const changeFocus = (val) => {
    setFocus(val);
  };

  return (
    <section>
      <div className={styles.step_container}>
        <h1 className={styles.step_title}>
          Our Steps To <span>Ensure</span> We Get Your Vision Right.
        </h1>
        <div className={styles.wrapper}>
          {steps.length > 0 &&
            steps
              .sort((a, b) => Number(a.title[0]) - Number(b.title[0]))
              .map((el, i) => {
                return (
                  <div
                    key={i}
                    className={focus !== i ? styles.step : styles.step_active}
                    onMouseEnter={() => changeFocus(i)}
                    style={{ backgroundImage: `url(${urlFor(el?.image)})` }}
                  >
                    <div className={styles.step_text}>
                      <h1>{el?.title}</h1>
                      <p>{el?.description}</p>
                    </div>
                  </div>
                );
              })}
        </div>
        <h2 className={styles.step_subtitle}>Then We Make That Vision A Reality.</h2>
      </div>
    </section>
  );
};

export default OurSteps;
