import React, { useState } from "react";
import Navbar from "../Navbar";
import ResultRecipe from "../ResultRecipe";

const Result = ({ data }) => {
  const [text, setText] = useState("");
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = () => {
    const newArray = data.filter((r) =>
      r.recipeName.toLowerCase().includes(text.toLowerCase())
    );
    setRecipes(newArray);
  };

  return (
    <>
      <Navbar />
      <h2>Find a recipe</h2>
      <div className="input-group wrapper">
        <input
          className="form-control fe-shadow"
          type="text"
          placeholder="find a recipe"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button className="btn btn-search" type="button" onClick={fetchRecipes}>
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="result">
        <ul className="grid">
          <ResultRecipe recipes={recipes} />
        </ul>
      </div>
    </>
  );
};

export default Result;
