import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../Navbar";
import GetRecommend from "../GetRecommend";
import Footer from "../Footer";

const View = ({ data }) => {
  const id = useLocation().search;
  const param = id.slice(4).replace("+", " ");
  const [recipe, setRecipe] = useState(null);
  const [click, setClick] = useState(false);

  useEffect(() => {
    fetchRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchRecipes = () => {
    const recipe = data.filter((i) => i.id === parseInt(param));
    setRecipe(recipe);
  };

  const handleClick = () => {
    setClick(!click);
  };

  const getDescription = () => {
    return recipe && recipe[0].description;
  };

  const getIngredients = () => {
    if (recipe && recipe[0].ingredients) {
      const ingredients = recipe[0].ingredients;
      let i = 0;
      return ingredients.map((ingredient) => (
        <li key={++i} className="ingredients">
          <input type="checkbox" id={`box${i}`} />
          <label htmlFor={`box${i}`}>{ingredient.ingredientName}</label>
        </li>
      ));
    }
  };

  const getDirection = () => {
    if (recipe && recipe[0].direction) {
      const directions = recipe[0].direction;
      let i = 0;
      return directions.map((direction) => (
        <li key={++i} className="directions">
          <i className="fa-solid fa-utensils">
            <h3>Step {i + 1}</h3>
          </i>
          <p className="my-0">{direction}</p>
        </li>
      ));
    }
  };

  return (
    <>
      <Navbar path="/view" />
      <div style={{ backgroundColor: "#f6f7f6" }}>
        <div className="flex jc-end fa-2x">
          <i className="far fa-flag  my-2"></i>
          <i
            className={`${click ? "fa-solid" : "fa-regular"} fa-heart m-2 mx-4`}
            style={{ color: `${click ? "red" : "black"}` }}
            onClick={handleClick}
          />
        </div>
        <div className="view-containe flex-center">
          <img
            className="view-image"
            src={recipe && recipe[0].imgSrc}
            alt="food"
          />
          <div className="view-description">
            <h1 className="text-center">
              How to make {recipe && recipe[0].recipeName}
            </h1>
            <p className="mx-5">{getDescription()}</p>
          </div>
        </div>
        <div className="view-description-section">
          <h2 className="ingredient-title m-4">Ingredient</h2>
          <ul className="h3">{getIngredients()}</ul>

          <h2 className="steps-title m-4">Steps</h2>
          <ul className="h3 mx-4 my-0">{getDirection()}</ul>
        </div>
      </div>

      <div className="rating-section flex">
        <p>Rate this recipe:</p>
        <div className="rating-stars">
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
        </div>
      </div>

      <div className="comment-section ">
        <div className="comment-section-header flex ai-center">
          <p>Leave comment for this recipe</p>
          <i className="fa-solid fa-comment" />
        </div>
        <textarea id="commentTextBox" cols="50" rows="10"></textarea>
        <button className="btn btn-post mb-5">Post</button>
      </div>

      <div className="Recommended-Restaurant-Div">
        <h3 className="Recommended-Restaurant-Title mx-4">
          Recommended Restaurants
        </h3>
        <div className="Recommend-item d-flex flex-row">
          <GetRecommend recipes={data} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default View;
