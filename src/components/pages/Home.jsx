import React, { useState } from "react";
import SearchForm from "../SearchForm";
import FoodCard from "../FoodCard";
import Footer from "../Footer";

const Home = () => {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      recipeName: "Yummy Bread",
      tag: "breakfast",
      imgSrc: "images/bread.jpg",
    },
    {
      id: 2,
      recipeName: "Cereal",
      tag: "breakfast",
      imgSrc: "images/cereal.jpg",
    },
    {
      id: 3,
      recipeName: "Egg Toast",
      tag: "breakfast",
      imgSrc: "images/egg-toast.jpg",
    },
    {
      id: 4,
      recipeName: "French Toast",
      tag: "breakfast",
      imgSrc: "images/french-toast.jpg",
    },
    {
      id: 5,
      recipeName: "Grilled Toast",
      tag: "breakfast",
      imgSrc: "images/grilled-toast.jpg",
    },
    {
      id: 6,
      recipeName: "Strawberry Pancake",
      tag: "lunch",
      imgSrc: "images/strawberry-pancakes.jpg",
    },
    {
      id: 7,
      recipeName: "Blueberry Pancake",
      tag: "lunch",
      imgSrc: "images/blueberry-pancakes.jpg",
    },
    {
      id: 8,
      recipeName: "Rice and Grilled Meat",
      tag: "lunch",
      imgSrc: "images/rice&grilled_meat.jpg",
    },
    {
      id: 9,
      recipeName: "Pumpkin Soup",
      tag: "dinner",
      imgSrc: "images/pumpkin-soup.jpg",
    },
    {
      id: 10,
      recipeName: "Pumpkin Soup",
      tag: "dinner",
      imgSrc: "images/zucchini-slice.jpg",
    },
    {
      id: 11,
      recipeName: "Easy Butter Chicken",
      tag: "dinner",
      imgSrc: "images/easy-butter-chicken.jpg",
    },
    {
      id: 12,
      recipeName: "Easy Fried Rice",
      tag: "dinner",
      imgSrc: "images/easy-fried-rice.jpg",
    },
    {
      id: 13,
      recipeName: "Curried Sausages",
      tag: "dinner",
      imgSrc: "images/curried-sausages.jpg",
    },
    {
      id: 14,
      recipeName: "Beef nachos",
      tag: "dinner",
      imgSrc: "images/beef-nachos.jpg",
    },
    {
      id: 15,
      recipeName: "Vegetarian Lasagne",
      tag: "dinner",
      imgSrc: "images/vegetarian-lasagne.jpg",
    },
    {
      id: 16,
      recipeName: "Chicken Soup",
      tag: "lunch",
      imgSrc: "images/chicken-soup.jpg",
    },
    {
      id: 17,
      recipeName: "Savoury mince",
      tag: "lunch",
      imgSrc: "images/savoury-mince.jpg",
    },
    {
      id: 18,
      recipeName: "Chicken curry",
      tag: "lunch",
      imgSrc: "images/chicken-curry.jpg",
    },
    {
      id: 19,
      recipeName: "Crispy skinned salmon",
      tag: "lunch",
      imgSrc: "images/crispy-skinned-salmon.jpg",
    },
    {
      id: 20,
      recipeName: "Healthy breakfast tacos",
      tag: "breakfast",
      imgSrc: "images/healthy-breakfast-tacos.jpg",
    },
    {
      id: 21,
      recipeName: "Breakfast Burritos",
      tag: "breakfast",
      imgSrc: "images/burritos.jpg",
    },
  ]);

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
