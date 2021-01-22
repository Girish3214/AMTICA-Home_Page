import React from "react";
import CardItem from "./CardItem";
import {} from "../styles/cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <div className="cards-container">
        <CardItem src="https://i.ibb.co/ncy7cb5/1120171.jpg" />
        <CardItem
          src="https://i.ibb.co/ncy7cb5/1120171.jpg"
          cardInfo="bottom"
        />
      </div>
    </div>
  );
};

export default Cards;
