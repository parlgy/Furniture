import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these Epic Furnitures!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/fun5.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Chairs"
              path="/products"
            />
            <CardItem
              src="images/fun6.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Desks"
              path="/products"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/fun2.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/products"
            />
            <CardItem
              src="images/fun3.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/fun4.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
