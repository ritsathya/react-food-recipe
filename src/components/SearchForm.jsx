import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchForm = () => {
  const [inputText, setInputText] = useState("");

  return (
    <div id="hero-section" className="hero flex-center">
      <div className="hero__search position-relative">
        <h2>Find a recipe</h2>
        <div className="input-group container">
          <input
            className="form-control fe-shadow"
            type="text"
            placeholder="find a recipe"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <Link
            to={`/result/?search=${inputText.replace(" ", "+")}`}
            className="btn btn-search"
          >
            <i className="fas fa-search"></i>
          </Link>
        </div>
        <Link
          className="btn btn-edit text-dark mt-5 position-absolute top-100 start-50 translate-middle"
          to="/result"
        >
          <small>Advanced Search</small>
        </Link>
      </div>
    </div>
  );
};

export default SearchForm;
