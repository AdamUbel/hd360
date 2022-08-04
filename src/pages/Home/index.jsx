import React from "react";
import About from "./About";
import Header from "./Header";
import Testimonies from "./Testimonies";
import Why from "./Why";

import styles from "./styles.module.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Why />
      <About />
      <Testimonies />
    </div>
  );
};

export default Home;
