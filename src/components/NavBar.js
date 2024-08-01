import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './ItemList';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Raina kids</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <ItemList />
        </Nav>
        <CartWidget />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
