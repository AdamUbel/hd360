import React from "react";
import About from "../../components/About";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Testimonies from "../../components/Testimonies";
import Why from "../../components/Why";

import styles from "./styles.module.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Why />
      <About />
      <Testimonies />
      <Footer />
    </div>
  );
};

export default Home;
