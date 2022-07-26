import React from "react";
import About from "../../components/About";
import Contact from "../../components/Contact";
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
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default Home;
