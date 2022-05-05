import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import TopNavbar from "../TopNavbar";

const Register = () => {
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
    const { username, email, password, confirm } = form
    const newErrors = {}

    // name errors
    if ( !username || username === '' ) newErrors.username = 'cannot be blank!'
    else if ( username.length > 30 ) newErrors.username = 'name is too long!'

    // email errors
    if ( !email || email === '' ) newErrors.email = 'cannot be blank!'
     
    // password errors
    if ( !password || password.length < 8 ) newErrors.password = 'enter atleast 8 characters password!'

    // confirm errors
    if ( !confirm || confirm !== password ) newErrors.confirm = 'password does not match!'

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
    <div>
      <TopNavbar/>

      <div className="login flex-center">
        <div className="login__form">
          <h3 className="mt-4">Create an Account</h3>
          <Form onSubmit={ e => handleSubmit(e) }>
            <Form.Group className="m-4 mt-3" controlId="formBasicUser">
              <Form.Label>Username</Form.Label>
              <Form.Control 
                type='text' 
                onChange={ e => setField('username', e.target.value) }
                isInvalid={ !!errors.username }
                placeholder='Chose Username' 
              />
              <Form.Control.Feedback type='invalid'>
                { errors.username }
              </Form.Control.Feedback>
            </Form.Group>
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
            
            <Form.Group className="m-4 mt-3" controlId="formBasicPassword">
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
            <Form.Group className="m-4 mt-3" controlId="formBasicConfirmation">
              <Form.Label>Password Again</Form.Label>
              <Form.Control 
                type="password" 
                onChange={ e => setField('confirm', e.target.value) }
                isInvalid={ !!errors.confirm }
                placeholder="Password Again" 
              />
              <Form.Control.Feedback type='invalid'>
              { errors.confirm }
            </Form.Control.Feedback>
            </Form.Group>

            <div className="col-md-12 text-center my-3 p-4">
              <Button variant="primary" type="submit" className="w-100">
                Register
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
