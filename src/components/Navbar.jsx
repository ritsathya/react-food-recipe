import React from "react";
import { Link } from "react-router-dom";

import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              id="logo"
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-grow-0"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav gap-3">
              <Button
                className="btn-edit"
                label=""
                icon={<i className="fas fa-tasks"></i>}
              />
              <Button
                className="btn-post"
                label=""
                icon={<i className="fas fa-edit"></i>}
              />
              <div className="separator"></div>
              <Button
                className="btn-login"
                label="Login"
                icon={<i className="fas fa-sign-in-alt"></i>}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
