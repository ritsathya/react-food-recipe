import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ResultRecipe from "../ResultRecipe";

const Result = ({ data }) => {
  const search = useLocation().search;
  let history = useNavigate();

  const [param, setParam] = useState(search.slice(8).replace("+", " "));
  const [text, setText] = useState(param);
  const [inclusion, setInclusion] = useState("");
  const [exclusion, setExclusion] = useState("");
  const [foodType, setFoodType] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [flavour, setFlavour] = useState("normal");

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

  const handleSearch = () => {
    const newArray = data.filter((r) => {
      return (
        r.recipeName.toLowerCase().includes(param.toLowerCase()) &&
        r.tag.toLowerCase().includes(foodType.toLowerCase()) &&
        r.flavour.toLowerCase().includes(flavour.toLowerCase())
      );
    });

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
        <button className="btn btn-search" type="button" onClick={handleSearch}>
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="flex-center">
        <div className="search-filter">
          <input
            type="text"
            id="include"
            placeholder="include ingredients"
            value={inclusion}
            onChange={(e) => setInclusion(e.target.value)}
          />
          <input
            type="text"
            id="exclude"
            placeholder="exclude ingredients"
            value={exclusion}
            onChange={(e) => setExclusion(e.target.value)}
          />
          <input
            type="text"
            id="type"
            placeholder="type of food"
            value={foodType}
            onChange={(e) => setFoodType(e.target.value)}
          />
          <select
            id="flavours"
            value={flavour}
            onChange={(e) => setFlavour(e.target.value)}
          >
            <option value="normal">Filter by flavours</option>
            <option value="spicy">Spicy</option>
            <option value="sweet">Sweet</option>
            <option value="salty">Salty</option>
          </select>
        </div>
      </div>
      <div className="result">
        <p style={{ textAlign: "center" }}>Total result: {recipes.length}</p>
        <ul className="grid">
          {recipes && <ResultRecipe recipes={recipes} />}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Result;
