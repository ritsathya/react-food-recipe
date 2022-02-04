import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import Navbar from '../Navbar';

const Login = () => {
  let navigate = useNavigate();

  const { setContextUser } = useContext(UserContext);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [isUser, setIsUser] = useState(true);
  const [isPass, setIsPass] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    // e.preventDefault() doesn't work, so this is manual error trap
    if (user === '' || password === '') {
      alert('Please enter provide the correct crediential');
      return;
    }

    let fetchURL = 'https://foodie-fake-rest-api.herokuapp.com/users';

    fetchURL = +user
      ? fetchURL.concat('?phone=', user)
      : fetchURL.concat('?email=', user);

    fetch(fetchURL)
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        let userFlag = false;
        let passFlag = false;

        if (users.length == 0) {
          userFlag = false;
          setIsUser(false);
          return;
        } else {
          userFlag = true;
          setIsUser(true);
        }

        if (users[0].password === password) {
          passFlag = true;
          setIsPass(true);
        } else {
          passFlag = false;
          setIsPass(false);
        }

        if (userFlag && passFlag) {
          setContextUser(users);
          // Go back one page so user can continue task
          navigate(-1);
        }
      });
  };
  return (
    <>
      <Navbar path='/login' />
      <div className='login flex-center'>
        <div className='login__form'>
          <h2 className='mt-4'>Welcome!</h2>
          <form className='m-4 mt-3' onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='inputEmailPhone' className='form-label'>
                EMAIL OR PHONE NUMBER
              </label>
              <small className={isUser ? 'd-none' : 'error-msg'}>
                email or phone number is not found.
              </small>
              <input
                type='text'
                className='form-control'
                id='inputEmailPhone'
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className='mb-2'>
              <label htmlFor='inputPassword' className='form-label'>
                PASSWORD
              </label>
              <small className={isPass ? 'd-none' : 'error-msg'}>
                Incorrect password.
              </small>
              <input
                type='password'
                className='form-control'
                id='inputPassword'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Link to='/forgetPassword'>Forgot your password?</Link>
            <div className='btn-section'>
              <button type='submit' className='btn col-12 mt-3 mb-2'>
                Login
              </button>
              <span>Need an account?</span>
              <Link to='/register'>Register</Link>
              <div className='row line-or-line g-0 mt-3'>
                <div className='line col-5'></div>
                <div className='col-2 text-center'>OR</div>
                <div className='line col-5'></div>
              </div>
              <button type='submit' className='btn col-12 mt-3 flex jc-center'>
                <i className='fa-brands fa-facebook-square' />
                <small className='mx-2'>Login with Facebook</small>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
