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
              text="Furniture is a quiet part of regular day-to-day existence and the centrality is known, just when we needed to confront circumstances without the help of legitimate furniture."
              label="Chairs"
              path="/products"
            />
            <CardItem
              src="images/fun6.jpg"
              text="Filling the office with the beautiful creation of wood"
              label="Desks"
              path="/products"
            />
          </ul>
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
              src="images/fun4.jpg"
              text="Decor the dreams with wood beauty"
              label="Study Tables"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
