import React, { useState } from 'react';
import TopNavbar from '../TopNavbar';
import { Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Login = () => {
  const [ form, setForm ] = useState({})
  const [ errors, setErrors ] = useState({})

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })

    if ( !!errors[field] ) setErrors({
      ...errors,
      [field]: null
    })
  }

  const findFormErrors = () => {
    const { email, password} = form
    const newErrors = {}

    // email errors
    if ( !email || email === '' ) newErrors.email = 'Incorrect Email!'
     
    // password errors
    if ( !password || password.length < 8 ) newErrors.password = 'Incorrect Password!'


    return newErrors
  }

  const handleSubmit = e => {
    e.preventDefault()

    // get new errors
    const newErrors = findFormErrors()
    if ( Object.keys(newErrors).length > 0 ) {
      // We got errors
      setErrors(newErrors)
    } else {
      alert('Thank you!')
    }
  }

  return (
    <>
      <TopNavbar />
      <div className='login flex-center'>
        <div className='login__form'>
          <h2 className='mt-4'>Welcome!</h2>
          <Form onSubmit={ e => handleSubmit(e) }>
            <Form.Group className="m-4 mt-3" controlId="formBasicEmail">
              <Form.Label>Email or Phone Number</Form.Label>
              <Form.Control 
                type="email" 
                onChange={ e => setField('email', e.target.value) }
                isInvalid={ !!errors.email }
                placeholder="example@domain.com"
              />
              <Form.Control.Feedback type='invalid'>
                { errors.email }
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group className="mx-4 mt-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                onChange={ e => setField('password', e.target.value) }
                isInvalid={ !!errors.password }
                placeholder="Password" 
              />
              <Form.Control.Feedback type='invalid'>
                { errors.password }
              </Form.Control.Feedback>
            </Form.Group>
            <Link to='#forgetPassword' className='mx-4'>Forget Password?</Link>

            <div className="col-md-12 text-center my-3 p-4">
              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
            </div>
          </Form>

          <Link to='/register' className='mx-4'>Register an Account</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
