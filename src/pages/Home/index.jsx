import React from "react";
import Header from "../../components/Header";
import Why from "../../components/Why";

import styles from "./styles.module.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Why />
      <div>About</div>
      <div>Testomonials</div>
      <div>Contact</div>
    </div>
  );
};

export default Home;
