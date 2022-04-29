import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

import Navbar from "../Navbar";

const Register = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email_or_phoneNumber, setEmail_or_phoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");

  const signUp = e =>
  {
    e.preventDefault();
    if(password == password_confirmation)
    {
      let data = {};
            
      if(email_or_phoneNumber.includes('@'))
      {
        let email = email_or_phoneNumber;
        data = {name, email, password, password_confirmation}
        alert(email)
      }else{
        let phone_number = email_or_phoneNumber;
        data = {name, phone_number, password, password_confirmation}
      }
      console.log(data)
      axios.post("register", data)
        .then(res => {
          console.log(res);
          
          if(res.data.message.includes("Duplicate")){
            alert("Email or Phone Number is already exist in our platform!")
          }
          localStorage.setItem("user-token", res.data.token);
        })
        .catch(err => {
          console.log(err);
        })
        
        // if(localStorage.getItem("user-token")) navigate(-2);
    }else{
      alert("Password not match!")
    }
  }

  return (
    <>
      <div>
        <Navbar path="/login" />

        <div className="login flex-center">
          <div className="login__form">
            <h3 className="mt-4">Create an Account</h3>
            <form onSubmit={signUp} className="m-4 mt-3">
              <div className="mb-3">
                <label htmlFor="inputEmailPhone" className="form-label">
                  EMAIL OR PHONE NUMBER <font style={{ color: "red" }}>*</font>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmailPhone"
                  minlength="9"
                  value={email_or_phoneNumber}
                  onChange={(e) => setEmail_or_phoneNumber(e.target.value)}
                  required
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
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
                  value={password}
                  minlength="8"
                  onChange={(e) => setPassword(e.target.value)}
                  required
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
                  minlength="8"
                  value={password_confirmation}
                  onChange={(e) => setPassword_confirmation(e.target.value)}
                  required
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
