import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>WEED</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="January 2020"
              label="JAN"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="February 2020"
              label="FEB"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="March 2020"
              label="MAR"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="April 2020"
              label="APRIL"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="May 2020"
              label="MAY"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
