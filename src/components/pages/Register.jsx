import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const Register = () => {
  return (
    <>
      <div>
        <Navbar path="/login" />

        <div className="login flex-center">
          <div className="login__form">
            <h3 className="mt-4">Create an Account</h3>
            <form className="m-4 mt-3">
              <div className="mb-3">
                <label htmlFor="inputEmailPhone" className="form-label">
                  EMAIL OR PHONE NUMBER <font style={{ color: "red" }}>*</font>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmailPhone"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="inputUsername" className="form-label">
                  USERNAME <font style={{ color: "red" }}>*</font>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputUsername"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="inputPassword" className="form-label">
                  PASSWORD <font style={{ color: "red" }}>*</font>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="inputConfirmPassword" className="form-label">
                  CONFIRM PASSWORD <font style={{ color: "red" }}>*</font>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputConfirmPassword"
                />
              </div>
              <div className="btn-section">
                <button type="submit" className="btn col-12 mt-2 mb-2">
                  Register
                </button>
                <span>Already have an account?</span>
                <Link to="/login">Login</Link>
                <div className="row line-or-line g-0 mt-3">
                  <div className="line col-5"></div>
                  <div className="col-2 text-center">OR</div>
                  <div className="line col-5"></div>
                </div>
                <button
                  type="submit"
                  className="btn col-12 mt-3 flex jc-center"
                >
                  <i className="fa-brands fa-facebook-square" />
                  <small className="mx-2">Sign up with Facebook</small>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
