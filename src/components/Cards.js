import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
      <div className="cards">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="p-8 rounded shadow-xl sm:p-16 border">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              We value Our
              <br className="hidden md:block" />
              Customers and aim at{' '}
              <span className="inline-block text-deep-purple-accent-400">
                providing quality products
              </span>
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="mb-4 text-base text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
              perspiciatis unde omnis iste. Sed ut perspiciatis unde omnis iste
              error sit voluptatem accusantium doloremque rem aperiam.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
      <h1>Check out Epic Furnitures!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          {/* <ul className="cards__items" style={{marginBottom:"20px",}}> */}
            {/* <CardItem
              src="images/fun5.jpg"
              // text="Furniture is a quiet part of reguown, just when we needed to confront circumstances without the help of legitimate furniture."
              label="Chairs"
              path="/products"
            />
            <CardItem
              src="images/fun6.jpg"
              // text="Furniture is a quiet part of reguown, just when we needed to confront circumstances without the help of legitimate furniture."
              label="Desks"
              path="/products"
            />
          </ul> */}
          <ul className="cards__items">
            <CardItem
              src="images/fun2.jpg"
              text="Low prices and best quality"
              label="Office Tables"
              path="/products"
            />
            <CardItem
              src="images/fun3.jpg"
              text="Furniture with an ease of comfort"
              label="Board Room Fuenitures"
              path="/products"
            />
            <CardItem
              src="images/fun3.jpg"
              text="Furniture with an ease of comfort"
              label="Board Room Fuenitures"
              path="/products"
            />
            <CardItem
              src="images/fun4.jpg"
              text="Decor the dreams with wood beauty"
              label="Study Tables"
              path="/products"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/fun2.jpg"
              // text="Low prices and best quality"
              label="Office Shelves"
              path="/products"
            />
            <CardItem
              src="images/fun3.jpg"
              // text="Furniture with an ease of comfort"
              label="Board Room Fuenitures"
              path="/products"
            />
            <CardItem
              src="images/fun4.jpg"
              // text="Decor the dreams with wood beauty"
              label="Study Tables"
              path="/products"
            />
          </ul>  
        </div>
      </div>

{/* Content Section */}

      
      
    </div>
    
  );
}

export default Cards;
