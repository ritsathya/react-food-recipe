import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap'

const TopNavbar = (props) => {
  const { contextUser } = useContext(UserContext);

  return (
    <Navbar bg="light" variant="light" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img 
            alt="website logo"
            src='/images/logo.png'
            width='200'
            height='50'
            className='d-inline-block align-top'
          />
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <NavDropdown title="Category" id="nav-category-dropdown">
            <NavDropdown.Item>Breakfast</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="#login">Login</Nav.Link>
          <Nav.Link as={Link} to="/register">Register</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
