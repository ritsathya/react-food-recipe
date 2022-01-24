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
              duration={array[0].duration}
              path={`/view/?id=${array[0].id}`}
            />
            <CardItem
              src={array[1].imgSrc}
              text={array[1].recipeName}
              label={props.label}
              duration={array[1].duration}
              path={`/view/?id=${array[1].id}`}
            />
            <CardItem
              src={array[2].imgSrc}
              text={array[2].recipeName}
              label={props.label}
              duration={array[2].duration}
              path={`/view/?id=${array[2].id}`}
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={array[3].imgSrc}
              text={array[3].recipeName}
              label={props.label}
              duration={array[3].duration}
              path={`/view/?id=${array[3].id}`}
            />
            <CardItem
              src={array[4].imgSrc}
              text={array[4].recipeName}
              label={props.label}
              duration={array[4].duration}
              path={`/view/?id=${array[4].id}`}
            />
            <CardItem
              src={array[5].imgSrc}
              text={array[5].recipeName}
              label={props.label}
              duration={array[5].duration}
              path={`/view/?id=${array[5].id}`}
            />
            <CardItem
              src={array[6].imgSrc}
              text={array[6].recipeName}
              label={props.label}
              duration={array[6].duration}
              path={`/view/?id=${array[6].id}`}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
