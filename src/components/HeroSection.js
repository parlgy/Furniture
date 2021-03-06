import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    // <div className="hero-container">
    //   <img src="/images/fun6.jpg" alt="" />
    //   {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
    //   <h1>Home Office Furnitures</h1>
    //   <p className="description-Title"> We offer quality and 
    //      affordable furnitures <br />and equipments to make your Office shine!
    //   </p>

    //   <div className="hero-btns">
    //     <Button
    //       className="btns"
    //       buttonStyle="btn--outline"
    //       buttonSize="btn--large"
    //     >
    //       GET STARTED
    //     </Button>
    //   </div>
    //   <p className="delivery_options">Payment on Delivery!!</p>

    // </div>
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          // src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          src="/images/fun6.jpg"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 mt-24 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Brand new
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Home Office{' '}
            <br className="hidden md:block" />
            furnitures{' '}
            <span className="inline-block text-deep-purple-accent-400">
              {/* is real */}
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg mt-8">
          We offer quality and affordable furnitures
          and equipments to make your Office shine!
          <br />
          Pay on Delivery!!
          </p>
          <div className="flex items-center mt-16">
            <Button
               buttonStyle="btn--primary"
              buttonSize="btn--large"
              // className="btn"
            >
              Get started
            </Button>
            <a
              href="/contact"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
