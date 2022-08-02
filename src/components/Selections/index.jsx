import React, { useState } from "react";

import EQ from "../../assets/imgs/eq.png";
import Wedding from "../../assets/imgs/wed.png";
import Busi from "../../assets/imgs/busi.png";
import Prod from "../../assets/imgs/prod.png";
import Arch from "../../assets/imgs/arch.png";

import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

import styles from "./styles.module.css";

const Selections = () => {
  const eq = { title: "Equine", img: EQ };
  const wedding = { title: "Weddings", img: Wedding };
  const business = { title: "Businesses", img: Busi };
  const products = { title: "Products", img: Prod };
  const architect = { title: "Architecture", img: Arch };

  const [arr, setArr] = useState([eq, wedding, business, products, architect]);

  const leftEvent = () => {
    const arrCopy = [...arr];

    arrCopy.unshift(arrCopy.pop());

    setArr(arrCopy);
  };

  const rightEvent = () => {
    const arrCopy = [...arr];

    arrCopy.push(arrCopy.shift());

    setArr(arrCopy);
  };

  return (
    <section id="selections">
      <div className={styles.selection_container}>
        <AiOutlineDoubleLeft onClick={leftEvent} className={styles.selection_arrow} />
        {arr.length > 0 &&
          arr.map((el, i) => {
            return (
              <div
                key={i}
                className={
                  i === Math.floor(arr.length / 2) ? `${styles.selection} ${styles.active_selection}` : styles.selection
                }
              >
                <h1>{el.title}</h1>
                <img src={el.img} alt="" className={styles.selection_img} />
              </div>
            );
          })}
        <AiOutlineDoubleRight onClick={rightEvent} className={styles.selection_arrow} />
      </div>
    </section>
  );
};

export default Selections;
