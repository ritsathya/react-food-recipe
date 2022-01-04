import React from "react";
import { Link } from "react-router-dom";

const SearchForm = () => {
  return (
    <div id="hero-section" className="hero flex jc-center ai-center">
      <div className="hero__search position-relative">
        <h2>Find a recipe</h2>
        <div className="input-group container">
          <input
            className="form-control fe-shadow"
            type="text"
            placeholder="find a recipe"
          />
          <button className="btn btn-search" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <Link
          className="btn btn-edit text-dark mt-5 position-absolute top-100 start-50 translate-middle"
          to="/"
        >
          <small>Advanced Search</small>
        </Link>
      </div>
    </div>
  );
};

export default SearchForm;
