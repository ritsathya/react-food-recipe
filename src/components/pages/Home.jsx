import React from "react";
import SearchForm from "../SearchForm";
import FoodCard from "../FoodCard";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <SearchForm />
      <FoodCard icon={<i className="fa-solid fa-bacon" />} label="BREAKFAST" />
      <FoodCard
        icon={<i className="fa-solid fa-drumstick-bite" />}
        label="LUNCH"
      />
      <FoodCard
        icon={<i className="fa-solid fa-champagne-glasses" />}
        label="DINNER"
      />
      <Footer />
    </>
  );
};

export default Home;
