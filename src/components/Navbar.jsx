import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
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
            className={props.path === "/login" ? "d-none" : "navbar-toggler"}
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
            className={
              props.path === "/login"
                ? "d-none"
                : "collapse navbar-collapse flex-grow-0"
            }
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav gap-3">
              <Link
                className={props.path !== "/" ? "d-none" : "btn btn-edit"}
                to="/shoppingList"
              >
                <i className="fas fa-tasks" />
              </Link>
              <Link
                className={props.path !== "/" ? "d-none" : "btn btn-post"}
                to="/post"
              >
                <i className="fas fa-edit" />
              </Link>
              <div className="separator"></div>
              <Link className="btn btn-login" to="/login">
                <i className="fas fa-sign-in-alt" />
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
