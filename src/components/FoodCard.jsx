import React from "react";
import CardItem from "./CardItem";

const FoodCard = (props) => {
  const array = props.array;
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
              src={array[0].imgSrc}
              text={array[0].recipeName}
              label={props.label}
              path="/services"
            />
            <CardItem
              src={array[1].imgSrc}
              text={array[1].recipeName}
              label={props.label}
              path="/services"
            />
            <CardItem
              src={array[2].imgSrc}
              text={array[2].recipeName}
              label={props.label}
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={array[3].imgSrc}
              text={array[3].recipeName}
              label={props.label}
              path="/services"
            />
            <CardItem
              src={array[4].imgSrc}
              text={array[4].recipeName}
              label={props.label}
              path="/services"
            />
            <CardItem
              src={array[5].imgSrc}
              text={array[5].recipeName}
              label={props.label}
              path="/services"
            />
            <CardItem
              src={array[6].imgSrc}
              text={array[6].recipeName}
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
