import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import ResultRecipe from "../ResultRecipe";

const Result = ({ data }) => {
  const search = useLocation().search;
  let history = useNavigate();

  const [param, setParam] = useState(search.slice(8).replace("+", " "));
  const [text, setText] = useState(param);
  const [recipes, setRecipes] = useState([]);

  // console.log(useLocation());

  useEffect(() => {
    fetchRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchRecipes = () => {
    const newArray = data.filter((r) =>
      r.recipeName.toLowerCase().includes(param.toLowerCase())
    );
    setRecipes(newArray);
    history(`/result/?search=${param.replace(" ", "+")}`);
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
            setParam(e.target.value);
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
