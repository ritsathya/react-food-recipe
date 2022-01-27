import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

const Login = () => {
  const devURL = "http://localhost:5000/users";
  let navigate = useNavigate();

  const [userLists, setUserLists] = useState(null);
  const [user, setUser] = useState("");
  const [isUser, setIsUser] = useState(true);
  const [isPass, setIsPass] = useState(true);
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetch(devURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserLists(data);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < userLists.length; i++) {
      if (userLists[i].email === user || userLists[i].phone === user) {
        setIsUser(true);
        userLists[i].password === password
          ? navigate("../", { replace: true })
          : setIsPass(false);
        return;
      }
      setIsUser(false);
    }
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
