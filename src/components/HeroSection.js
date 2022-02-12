import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <img src="/images/fun6.jpg" alt="" />
      {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
      <h1>Home Office Furnitures</h1>
      <p className="subTitle">Place Your Order Today!</p>
      <p className="description-Title"> We offer a wide range of 
          Office tables and chairs that are flexible, <br/>
          dynamic and ergonomic. We understand 
          your needs & requirements and provide <br/>
          solutions to fulfill them.</p>
      <p className="delivery_options">Payment on Delivery!!</p>
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
