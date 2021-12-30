import React from "react";

const SearchForm = () => {
  return (
    <div className="hero flex jc-center ai-center">
      <div className="hero__search position-relative">
        <h2>Find a recipe</h2>
        <div className="input-group container">
          <input
            className="form-control fe-shadow"
            type="text"
            placeholder="find a recipe"
          />
          <button className="btn btn-search" type="submit" title="searchBtn">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <a
          className="btn btn-edit text-dark mt-5 position-absolute top-100 start-50 translate-middle"
          href="#"
        >
          <small>Advanced Search</small>
        </a>
      </div>
    </div>
  );
};

export default SearchForm;
