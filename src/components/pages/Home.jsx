import React from "react";
import SearchForm from "../SearchForm";
import FoodCard from "../FoodCard";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Home = ({ recipe }) => {
  const recipes = recipe;
  const breakfast = recipes.filter(
    (recipe) => recipe.tag.includes("breakfast") && recipe
  );
  const lunch = recipes.filter(
    (recipe) => recipe.tag.includes("lunch") && recipe
  );
  const dinner = recipes.filter(
    (recipe) => recipe.tag.includes("dinner") && recipe
  );

  return (
    <>
      <Navbar path="/" />
      <SearchForm />
      <FoodCard
        icon={<i className="fa-solid fa-bacon" />}
        label="BREAKFAST"
        array={breakfast}
      />
      <FoodCard
        icon={<i className="fa-solid fa-drumstick-bite" />}
        label="LUNCH"
        array={lunch}
      />
      <FoodCard
        icon={<i className="fa-solid fa-champagne-glasses" />}
        label="DINNER"
        array={dinner}
      />
      <Footer />
    </>
  );
};

export default Home;
