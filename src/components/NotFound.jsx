import React from "react";
import { Link } from "react-router-dom";
import TopNavbar from "./TopNavbar";

const NotFound = () => {
  return (
    <div>
      <TopNavbar />
      <div className="not-found-container">
        <div className="not-found-icon">
          <i className="fa-solid fa-circle-exclamation" />
        </div>
        <h2>Not Found</h2>
        <img
          src={`${process.env.PUBLIC_URL}/images/not-found.svg`}
          alt="not-found"
        />
        <Link to="/">Go back Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
