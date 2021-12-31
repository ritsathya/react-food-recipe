import React from "react";
import CardItem from "./CardItem";

const FoodCard = (props) => {
  return (
    <div className="cards">
      <h2>
        {props.icon}
        {props.label}
      </h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/bread.jpg"
              text="Yummy Bread"
              label={props.label}
              path="/services"
            />
            <CardItem
              src="images/cereal.jpg"
              text="Cereal"
              label={props.label}
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/egg-toast.jpg"
              text="Egg Toast"
              label={props.label}
              path="/services"
            />
            <CardItem
              src="images/french-toast.jpg"
              text="French Toast"
              label={props.label}
              path="/services"
            />
            <CardItem
              src="images/strawberry-pancakes.jpg"
              text="Strawberry Pancakes"
              label={props.label}
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
