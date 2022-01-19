import React from "react";
import CardItem from "./CardItem";

const ResultRecipe = ({ recipes }) => {
  return (
    <>
      {recipes.map((recipe) => (
        <CardItem
          key={recipe.id}
          src={recipe.imgSrc}
          text={recipe.recipeName}
          label={recipe.tag}
          path="/services"
        />
      ))}
    </>
  );
};

export default ResultRecipe;
