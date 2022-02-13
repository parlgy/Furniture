import React from "react";
import "../../App";
// import { Button } from "../Button";
// import "./Home.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Content from "../Content"


function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Content />
      <Footer />
    </>
  );
}

export default Home;
