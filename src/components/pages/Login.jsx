import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Navbar from "../Navbar";

const Login = () => {
  let navigate = useNavigate();

  const { setContextUser } = useContext(UserContext);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isUser, setIsUser] = useState(true);
  const [isPass, setIsPass] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    let fetchURL = "https://foodie-fake-rest-api.herokuapp.com/users";

    fetchURL = +user
      ? fetchURL.concat("?phone=", user)
      : fetchURL.concat("?email=", user);

    fetch(fetchURL)
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        setIsUser(users.length >= 1);
        setIsPass(users.some((user) => user.password === password));

        if (isUser && isPass) {
          setContextUser(users);
          navigate("../", { replace: true });
        }
      });
  };
  return (
    <>
      <Navbar path="/login" />
      <div className="login flex-center">
        <div className="login__form">
          <h2 className="mt-4">Welcome!</h2>
          <form className="m-4 mt-3" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="inputEmailPhone" className="form-label">
                EMAIL OR PHONE NUMBER
              </label>
              <small className={isUser ? "d-none" : "error-msg"}>
                email or phone number is not found.
              </small>
              <input
                type="text"
                className="form-control"
                id="inputEmailPhone"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="inputPassword" className="form-label">
                PASSWORD
              </label>
              <small className={isPass ? "d-none" : "error-msg"}>
                Incorrect password.
              </small>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
