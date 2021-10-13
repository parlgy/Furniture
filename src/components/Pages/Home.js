import React from "react";
import "../../App";
// import { Button } from "../Button";
// import "./Home.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";

function Home() {
  return (
    <>
      {/* <div className="hero-container">
        <img src="/images/fun6.jpg" alt="" /> */}
      {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
      {/* <h3>BEST OFFICE FURNITURES</h3>
        <p className="other">Give your orders now!</p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            GET STARTED
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={console.log("hey")}
          >
            CONTACT US
            <i class="fas fa-phone-square-alt"></i>
          </Button>
        </div>
      </div> */}
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
