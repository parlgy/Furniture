import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <img src="/images/fun6.jpg" alt="" />
      {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
      <h1>HOME OFFICE FURNITURES</h1>
      <p>Place Your Order Today!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        {/* <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
          path="/contacts"
        >
          CONTACT US
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
