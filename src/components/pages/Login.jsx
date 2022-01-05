import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login flex-center">
        <div className="login__form">
          <h2 className="mt-4">Welcome!</h2>
          <form className="m-4 mt-3">
            <div className="mb-3">
              <label htmlFor="inputEmailPhone" className="form-label">
                EMAIL OR PHONE NUMBER
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmailPhone"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="inputPassword" className="form-label">
                PASSWORD
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
              />
            </div>
            <Link to="/forgetPassword">Forgot your password?</Link>
            <div className="btn-section">
              <button type="submit" className="btn col-12 mt-3 mb-2">
                Login
              </button>
              <span>Need an account?</span>
              <Link to="/register">Register</Link>
              <div className="row line-or-line g-0 mt-3">
                <div className="line col-5"></div>
                <div className="col-2 text-center">OR</div>
                <div className="line col-5"></div>
              </div>
              <button type="submit" className="btn col-12 mt-3 flex jc-center">
                <i className="fa-brands fa-facebook-square" />
                <small className="mx-2">Login with Facebook</small>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
