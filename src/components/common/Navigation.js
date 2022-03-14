import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar,Nav, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
        <Navbar.Brand href="#" className='navbar-brand'>CRUD Cafe</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#" className='nav-link'>Inicio</Nav.Link>
              <Nav.Link href="#" className='nav-link'>Productos</Nav.Link>
              <Nav.Link href="#" className='nav-link'>Extra</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Navigation;
